import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Bookmark, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar?: string;
    username: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
  likes: number;
  comments: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
  featured?: boolean;
  className?: string;
}

const BlogCard = ({
  title,
  excerpt,
  author,
  publishedAt,
  readTime,
  tags,
  likes,
  comments,
  isLiked = false,
  isBookmarked = false,
  featured = false,
  className
}: BlogCardProps) => {
  return (
    <Card className={cn(
      "blog-card cursor-pointer group border-0",
      featured && "ring-1 ring-primary/20",
      className
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback className="bg-primary/10 text-primary text-xs">
                {author.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">{author.name}</span>
              <div className="flex items-center text-xs text-muted-foreground">
                <span>{publishedAt}</span>
                <span className="mx-1">•</span>
                <span>{readTime}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        <h3 className="text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
          {excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "text-muted-foreground hover:text-primary p-1 h-auto",
                isLiked && "text-red-500 hover:text-red-600"
              )}
            >
              <Heart className={cn("h-4 w-4 mr-1", isLiked && "fill-current")} />
              <span className="text-xs">{likes}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-1 h-auto">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span className="text-xs">{comments}</span>
            </Button>
          </div>

          <Button 
            variant="ghost" 
            size="sm" 
            className={cn(
              "text-muted-foreground hover:text-primary p-1 h-auto",
              isBookmarked && "text-primary"
            )}
          >
            <Bookmark className={cn("h-4 w-4", isBookmarked && "fill-current")} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;