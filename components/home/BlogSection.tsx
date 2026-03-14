import React from 'react';
import Image from 'next/image';
import { User, Calendar, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BLOG_POSTS = [
  {
    id: 8,
    title: "Fashion and Beauty Series 8",
    author: "Admin",
    date: "31st May, 2021",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quae illo soluta sapiente minus voluptatibus molesti...",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Fashion and Beauty Series 7",
    author: "Admin",
    date: "31st May, 2021",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quae illo soluta sapiente minus voluptatibus molesti...",
    image: "https://images.unsplash.com/photo-1490481658541-91991034c7cb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Fashion and Beauty Series 6",
    author: "Admin",
    date: "31st May, 2021",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quae illo soluta sapiente minus voluptatibus molesti...",
    image: "https://images.unsplash.com/photo-1539109132382-381bb3f1cffb?q=80&w=600&auto=format&fit=crop"
  }
];

export default function BlogSection() {
  return (
    <section className="py-12 relative">
      {/* Header */}
      <div className="border-b pb-4 mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Our Blog</h2>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Carousel Navigation (Visual) */}
      <div className="absolute top-1/2 -right-4 -translate-y-1/2 hidden xl:block">
        <Button variant="outline" size="icon" className="rounded-full shadow-lg bg-white border-none h-12 w-12 hover:bg-orange-600 hover:text-white transition-colors">
          <ChevronRight size={24} />
        </Button>
      </div>
    </section>
  );
}

function BlogCard({ post }: { post: any }) {
  return (
    <Card className="border-none shadow-none group cursor-pointer overflow-hidden">
      <CardContent className="p-0 space-y-4">
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="space-y-3 px-1">
          <h3 className="text-lg font-bold text-gray-800 hover:text-orange-600 transition-colors">
            {post.title}
          </h3>
          
          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
            <div className="flex items-center gap-1.5">
              <User size={14} className="text-gray-400" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-gray-400" />
              <span>{post.date}</span>
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}