import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedPost from '@/components/FeaturedPost';
import PostGrid from '@/components/PostGrid';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      <Hero />
      <FeaturedPost />
      <PostGrid />
      <Newsletter />
      <Footer />
    </div>
  );
}
