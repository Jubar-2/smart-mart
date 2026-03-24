import Image from "next/image";
import { User, Calendar, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BlogCardProps {
  image: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

export default function BlogCard({ image, title, author, date, excerpt }: BlogCardProps) {
  return (
    <Card className="border-none shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300">
      <div className="relative aspect-16/11 overflow-hidden">
        {/* Floating Stars Decorative Element */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 text-yellow-400 opacity-80">
          <Star size={20} />
          <Star size={20} />
        </div>
        
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-800 leading-tight group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-4 text-[13px] text-gray-400">
          <div className="flex items-center gap-1.5">
            <User size={14} className="text-gray-300" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-gray-300" />
            <span>{date}</span>
          </div>
        </div>
        
        <div className="h-px bg-gray-100 w-full" />
        
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </CardContent>
    </Card>
  );
}