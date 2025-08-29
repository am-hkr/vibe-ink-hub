import { Button } from '@/components/ui/button';
import { PenTool, TrendingUp, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="blog-hero py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text leading-tight">
            Share Your Stories,
            <br />
            Inspire the World
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of writers sharing their thoughts, experiences, and expertise. 
            Create, publish, and connect with readers who care about your ideas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary btn-glow text-primary-foreground shadow-elegant px-8"
            >
              <PenTool className="h-5 w-5 mr-2" />
              Start Writing
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Explore Articles
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <PenTool className="h-8 w-8 text-primary mb-2" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">1000+</h3>
              <p className="text-muted-foreground">Articles Published</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Users className="h-8 w-8 text-secondary-accent mb-2" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">5000+</h3>
              <p className="text-muted-foreground">Active Writers</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary-glow mb-2" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">50K+</h3>
              <p className="text-muted-foreground">Monthly Readers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;