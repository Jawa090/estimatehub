
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  // Sample blog post data - in a real app this would come from an API
  const blogPosts = {
    '1': {
      title: "The Future of Construction Estimating: AI and Machine Learning Trends",
      content: `
        <p>Artificial intelligence and machine learning are revolutionizing the construction industry, particularly in the realm of cost estimation and project planning. These technologies are transforming how we approach construction projects, making them more accurate, efficient, and cost-effective.</p>
        
        <h2>The Current State of Construction Estimating</h2>
        <p>Traditional construction estimating has long relied on manual processes, historical data, and experienced professionals making educated guesses. While this approach has served the industry for decades, it's prone to human error and can be time-consuming.</p>
        
        <h2>How AI is Changing the Game</h2>
        <p>AI-powered estimating tools can analyze vast amounts of data in seconds, identifying patterns and trends that humans might miss. Machine learning algorithms can learn from past projects to improve accuracy over time.</p>
        
        <h2>Benefits of AI in Construction Estimating</h2>
        <ul>
          <li>Increased accuracy in cost predictions</li>
          <li>Faster turnaround times for estimates</li>
          <li>Better risk assessment and mitigation</li>
          <li>Improved resource allocation</li>
          <li>Enhanced project planning capabilities</li>
        </ul>
        
        <h2>The Future Outlook</h2>
        <p>As AI technology continues to advance, we can expect even more sophisticated tools that will further streamline the estimating process and improve project outcomes.</p>
      `,
      category: "Technology",
      author: "John Smith",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/placeholder.svg",
      tags: ["AI", "Technology", "Estimating"]
    },
    '2': {
      title: "10 Essential Tips for Accurate Quantity Takeoffs",
      content: `
        <p>Accurate quantity takeoffs are the foundation of successful construction projects. Here are ten essential tips to help you master this critical skill.</p>
        
        <h2>1. Start with a Clear Understanding of the Project</h2>
        <p>Before diving into calculations, ensure you fully understand the project scope, specifications, and requirements.</p>
        
        <h2>2. Use Standardized Methods</h2>
        <p>Consistency is key. Develop and stick to standardized methods for measuring and calculating quantities.</p>
        
        <h2>3. Double-Check Your Measurements</h2>
        <p>Always verify your measurements and calculations. A small error can lead to significant cost overruns.</p>
        
        <h2>4. Leverage Technology</h2>
        <p>Modern takeoff software can significantly improve accuracy and efficiency compared to manual methods.</p>
        
        <h2>5. Account for Waste and Overlap</h2>
        <p>Don't forget to include appropriate waste factors and material overlaps in your calculations.</p>
        
        <p>Continue reading for the remaining five tips that will help you become a takeoff expert...</p>
      `,
      category: "Best Practices",
      author: "Sarah Johnson",
      date: "2024-01-12",
      readTime: "7 min read",
      image: "/placeholder.svg",
      tags: ["Takeoffs", "Best Practices", "Accuracy"]
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-construction-blue hover:text-construction-orange mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary" className="bg-construction-orange/10 text-construction-orange">
                {post.category}
              </Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                {post.readTime}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
            
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div 
            className="prose prose-lg max-w-none prose-headings:text-construction-darkGray prose-p:text-gray-700 prose-ul:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default BlogPost;
