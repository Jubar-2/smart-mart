import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, ChevronRightIcon } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const DEALS = [
  {
    id: 1,
    category: "Electronics",
    title: "UMIDIGI A9 Pro Android Mobile Phone...",
    price: 1573.03,
    oldPrice: 1910.11,
    discount: 18,
    rating: 4,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=400&auto=format&fit=crop" // Placeholder
  },
  {
    id: 2,
    category: "Women Clothing",
    title: "2021 Summer Women Clothing Ropa Sex...",
    price: 144.83,
    oldPrice: 189.78,
    discount: 29,
    rating: 0,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Women Clothing",
    title: "Top Sale High Quality Newest Design...",
    price: 69.55,
    oldPrice: null,
    discount: null,
    rating: 0,
    image: "https://images.unsplash.com/photo-1529139513065-07b2c2390598?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Women Clothing",
    title: "New Arrive Spring Fall Women Clothi...",
    price: 144.83,
    oldPrice: 189.78,
    discount: 29,
    rating: 0,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=400&auto=format&fit=crop"
  }
];

export default function DealsOfTheWeek() {
  return (
    <section className="py-8 relative">
      {/* Header with Timer */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Deals Of The Week</h2>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <TimerUnit value="00" label="Days" />
            <TimerUnit value="00" label="Hrs" />
            <TimerUnit value="00" label="Min" />
            <TimerUnit value="00" label="Sec" />
          </div>
          <a href="#" className="text-sm font-medium text-gray-500 hover:text-orange-600 flex items-center gap-1 ml-4">
            View All <ChevronRightIcon size={14} />
          </a>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DEALS.map((product) => (
          <DealCard key={product.id} {...product} />
        ))}
      </div>

      {/* Navigation Arrows (Visual only) */}
      <div className="absolute top-1/2 -left-4 -translate-y-1/2 hidden xl:block">
        <Button variant="outline" size="icon" className="rounded-full shadow-md bg-white">
          <ChevronLeft size={20} />
        </Button>
      </div>
      <div className="absolute top-1/2 -right-4 -translate-y-1/2 hidden xl:block">
        <Button variant="outline" size="icon" className="rounded-full shadow-md bg-white">
          <ChevronRight size={20} />
        </Button>
      </div>
    </section>
  );
}

function TimerUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-1">
      <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
        {value} {label}
      </div>
    </div>
  );
}

function DealCard({ category, title, price, oldPrice, discount, rating, image }: any) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-4 group hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/5] mb-4 bg-gray-50 rounded-md overflow-hidden">
        {discount && (
          <Badge className="absolute top-2 right-2 bg-orange-400 hover:bg-orange-500 border-none font-bold">
            -{discount}%
          </Badge>
        )}
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="space-y-1">
        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
          {category}
        </span>
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 h-10 leading-snug">
          {title}
        </h3>
        
        <div className="flex gap-0.5 py-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} 
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-orange-600 font-bold text-lg">
            ${price.toLocaleString()}
          </span>
          {oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${oldPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}