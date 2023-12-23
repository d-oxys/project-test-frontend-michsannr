import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReactLoading from 'react-loading';
import Dropdown from './dropdown';
import PaginationInfo from './paginationInfo';

type Image = {
  url: string;
};

type Post = {
  id: string;
  title: string;
  small_image: Image[];
  medium_image: Image[];
  published_at: string;
  url: string;
  content: string;
};

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [sort, setSort] = useState<string>('-published_at');
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState('10');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const totalRendered = posts ? posts.length : 0;
  const displayTotal = totalRendered > 100 ? totalRendered : 100;
  const totalPages = Math.ceil(displayTotal / parseInt(perPage));
  let startPage = Math.max(1, page - Math.floor(totalPages / 2));
  let endPage = Math.min(totalPages, startPage + totalPages - 1);

  if (endPage - startPage + 1 < totalPages) {
    startPage = Math.max(1, endPage - totalPages + 1);
  }

  useEffect(() => {
    setLoading(true);
    fetch(`https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${page}&page[size]=${perPage}&append[]=small_image&append[]=medium_image&sort=${sort}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
        setLoading(false);
      });
  }, [sort, page, perPage]);

  return (
    <>
      <div className='font-roboto'>
        <div className='py-4'>
          {loading ? (
            <div className='flex items-center justify-center'>
              <ReactLoading type={'spin'} color={'#000000'} height={667} width={375} />
            </div>
          ) : (
            <div>
              <div className='mx-8 flex max-w-screen-xl flex-wrap items-center justify-between py-4'>
                <div className='flex items-center'>
                  <div className='flex items-center'>
                    <PaginationInfo currentPage={page} perPage={parseInt(perPage)} total={displayTotal} />
                  </div>
                </div>
                <div className={`z-10 w-full md:block md:w-auto`} id='navbar-default'>
                  <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-transparent p-4 font-medium  md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 '>
                    <li>
                      <div className='z-10 flex items-center'>
                        <span className='font-condensed mr-4 text-base font-semibold'>Show per page: </span>
                        <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} options={{ '10': '10', '20': '20', '50': '50' }} selectedOption={perPage} setSelectedOption={setPerPage} />
                      </div>
                    </li>
                    <li>
                      <div className='z-10 flex items-center'>
                        <span className='font-condensed mr-4 text-base font-semibold'>Sort by: </span>
                        <Dropdown isOpen={isOpenSort} setIsOpen={setIsOpenSort} options={{ '-published_at': 'Newest', published_at: 'Latest' }} selectedOption={sort} setSelectedOption={setSort} />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='-mx-4 overflow-x-auto px-4 py-8 sm:-mx-8 sm:px-8'>
                <div className='inline-block min-w-full overflow-hidden rounded-lg'>
                  <div className='font-condensed grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-4'>
                    {posts ? (
                      posts.length > 0 ? (
                        posts.map((post) => {
                          const date = new Date(post.published_at);
                          const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
                          const day = date.getDate();
                          const month = monthNames[date.getMonth()];
                          const year = date.getFullYear();

                          return (
                            <div key={post.id} className='flex max-w-sm flex-col rounded-lg border border-gray-200 bg-white shadow-md'>
                              <Link href={`/article/${post.title}?content=${encodeURIComponent(post.content)}`} key={post.id}>
                                {post.medium_image && post.medium_image[0] && (
                                  <div className='relative h-44 w-full overflow-hidden'>
                                    <Image className='absolute left-0 top-0 h-full w-full rounded-t-lg object-cover' src={post.medium_image[0].url} alt={post.title} layout='fill' />
                                  </div>
                                )}
                                <div className='px-5 py-8'>
                                  <a href='#'>
                                    <h5 className='mb-2 text-sm font-light tracking-tight text-gray-600 '>{`${day} ${month} ${year}`}</h5>
                                  </a>
                                  <h2 className='mb-2 text-xl font-semibold text-gray-900 '>{post.title}</h2>
                                </div>
                              </Link>
                            </div>
                          );
                        })
                      ) : (
                        <h1>Server sedang bermasalah, coba lagi nanti</h1>
                      )
                    ) : (
                      <h1>Server sedang bermasalah, coba lagi nanti</h1>
                    )}
                  </div>

                  <nav className='mt-8 flex justify-center'>
                    <ul className='flex h-8 items-center -space-x-px text-sm'>
                      <li>
                        <button
                          onClick={() => setPage((prevPage) => prevPage - 1)}
                          disabled={page === 1}
                          className='ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                        >
                          <span className='sr-only'>Previous</span>
                          <svg className='h-2.5 w-2.5 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 6 10'>
                            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 1 1 5l4 4' />
                          </svg>
                        </button>
                      </li>
                      {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((pageNum) => (
                        <li key={pageNum}>
                          <button
                            onClick={() => setPage(pageNum)}
                            className={`flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 ${pageNum === page ? 'bg-orange-500 text-white' : ''}`}
                          >
                            {pageNum}
                          </button>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={() => setPage((prevPage) => prevPage + 1)}
                          disabled={page === totalPages}
                          className='flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                        >
                          <span className='sr-only'>Next</span>
                          <svg className='h-2.5 w-2.5 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 6 10'>
                            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 9 4-4-4-4' />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostList;
