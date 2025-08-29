import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedBlogs from '@/components/FeaturedBlogs';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedBlogs />
      </main>
    </div>
  );
};

export default HomePage;