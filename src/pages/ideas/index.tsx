import Navbar from '@/components/navbar';
import Container from '@/components/container';
import Banner from '@/components/banner';
import ListPost from '@/components/listPost';
import Footer from '@/components/Footer';
import '../../app/globals.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='mt-0'>
        <Banner imageUrl='https://suitmedia.static-assets.id/storage/files/2007/suitmedia-about-bg.jpeg' headline='Ideas' text='Where all our great things begin' />
      </div>
      <Container>
        <div className='min-h-screen'>
          <ListPost />
        </div>
      </Container>
      <Footer />
    </>
  );
}
