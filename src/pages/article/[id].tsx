import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Container from '@/components/container';
import 'tailwindcss/tailwind.css';

const Article = () => {
  const router = useRouter();
  const { id, content: encodedContent } = router.query;
  const [loading, setLoading] = useState(false);

  // Dekode konten dari format URL
  const content = decodeURIComponent(encodedContent as string);

  useEffect(() => {
    if (id) {
      setLoading(true);
      // Lakukan fetch data lain yang diperlukan berdasarkan id
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const styledContent = `
  <style>
  .my-content p {
    color: black;
    margin: 8px 0; 
  }
  .my-content h1 {
    font-size: 2em;
  }
  .my-content strong {
    font-size: 16px;
    margin-top: 2rem; 
    font-weight: bold;
    display: block;
  }
  .my-content li {
    list-style-type: decimal;
  }
</style>
    ${content}
  `;

  return (
    <div>
      <Navbar />
      <div className='font-roboto pt-12 md:pt-20'>
        <Container>
          <h1 className='font-condensed my-6 text-center text-2xl md:text-4xl'>Artikel {id}</h1>
          <div className='my-content'>
            <div dangerouslySetInnerHTML={{ __html: styledContent }} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Article;
