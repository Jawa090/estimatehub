
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Construction Estimating: AI and Machine Learning Trends",
      excerpt: "Discover how artificial intelligence and machine learning are revolutionizing construction cost estimation and project planning.",
      category: "Technology",
      author: "John Smith",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/image1.jpg",
      tags: ["AI", "Technology", "Estimating"]
    },
    {
      id: 2,
      title: "10 Essential Tips for Accurate Quantity Takeoffs",
      excerpt: "Master the art of quantity takeoffs with these proven strategies and best practices from industry experts.",
      category: "Best Practices",
      author: "Sarah Johnson",
      date: "2024-01-12",
      readTime: "7 min read",
      image: "/image2.webp",
      tags: ["Takeoffs", "Best Practices", "Accuracy"]
    },
    {
      id: 3,
      title: "Green Building Estimation: LEED Certification Cost Analysis",
      excerpt: "Understanding the financial implications and cost benefits of pursuing LEED certification in your construction projects.",
      category: "Sustainability",
      author: "Mike Chen",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "/image3.jpg",
      tags: ["LEED", "Green Building", "Sustainability"]
    },
    {
      id: 4,
      title: "BIM Integration in Construction Estimating Workflows",
      excerpt: "Learn how Building Information Modeling (BIM) can streamline your estimating process and improve project outcomes.",
      category: "Technology",
      author: "Emily Davis",
      date: "2024-01-08",
      readTime: "8 min read",
      image: "/image4.webp",
      tags: ["BIM", "Technology", "Workflow"]
    },
    {
      id: 5,
      title: "Managing Cost Overruns: Proactive Strategies for Project Success",
      excerpt: "Effective techniques to prevent and manage cost overruns in construction projects through better planning and monitoring.",
      category: "Project Management",
      author: "Robert Wilson",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "/image5.webp",
      tags: ["Cost Management", "Project Management", "Strategy"]
    },
    {
      id: 6,
      title: "Digital Transformation in Construction: Tools and Technologies",
      excerpt: "Explore the latest digital tools and technologies that are transforming the construction industry landscape.",
      category: "Technology",
      author: "Lisa Anderson",
      date: "2024-01-03",
      readTime: "9 min read",
      image: "/image6.webp",
      tags: ["Digital", "Technology", "Innovation"]
    }
  ];

  const categories = ["all", "Technology", "Best Practices", "Sustainability", "Project Management"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-construction-blue to-construction-darkGray text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Construction Insights Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights from the construction industry.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-construction-orange/10 text-construction-orange">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-construction-orange transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="ghost" size="sm" className="group-hover:text-construction-orange">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-construction-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest construction insights and industry updates.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              placeholder="Enter your email" 
              className="bg-white text-construction-darkGray"
            />
            <Button className="bg-construction-orange hover:bg-orange-600">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
};

export default Blog;
