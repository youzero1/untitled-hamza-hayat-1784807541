import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PostGrid from '@/components/PostGrid';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      <Hero />
      <PostGrid />
      <Newsletter />
      <Footer />
    </div>
  );
}
