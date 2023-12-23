import Navbar from '@/components/navbar';
import Container from '@/components/container';
import 'tailwindcss/tailwind.css';
import Footer from '@/components/Footer';
import JumboTron from '@/components/jumboTron';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='mt-0 min-h-screen'>
        <JumboTron
          imageUrl=''
          headline='Career'
          text='WE NEVER TIRE OF
THE MANTRA
QUALITY
OVER QUANTITY'
        />
      </div>
      <Container>
        <div className='mt-16 h-screen'></div>
      </Container>
      <Footer />
    </>
  );
}
