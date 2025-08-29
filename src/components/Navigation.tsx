import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, X, PenTool, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold gradient-text">BlogHub</h1>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 bg-muted/50 border-0 focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Trending
            </Button>
            <Button variant="ghost" size="sm">
              Categories
            </Button>
            <Button variant="default" size="sm" className="bg-gradient-primary btn-glow">
              <PenTool className="h-4 w-4 mr-2" />
              Write
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
        )}>
          <div className="pt-2 pb-3 space-y-3">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 bg-muted/50 border-0 focus:ring-1 focus:ring-primary"
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" size="sm" className="justify-start">
                Trending
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                Categories
              </Button>
              <Button variant="default" size="sm" className="bg-gradient-primary btn-glow justify-start">
                <PenTool className="h-4 w-4 mr-2" />
                Write Article
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;