import React from 'react';
import Image from 'next/image';
import { ChevronRight, Star } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const FLASH_PRODUCTS = [
  {
    id: 1,
    category: "Men Clothing",
    title: "Men Leather Jacket Men New Men High Quality Collar...",
    price: 1362.81,
    oldPrice: 1893.26,
    discount: 29,
    rating: 0,
    sold: 45,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500&auto=format&fit=crop" 
  },
  {
    id: 2,
    category: "Electronics",
    title: "Dropshipping EIS 2.4 inch LCD Full HD 720P Recordi...",
    price: 134.83,
    oldPrice: 189.78,
    discount: 29,
    rating: 0,
    sold: 12,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop"
  }
];

export default function FlashDeal() {
  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          Flash Deal
        </h2>
        <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
          <ChevronRight size={24} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FLASH_PRODUCTS.map((product) => (
          <FlashProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

function FlashProductCard({ category, title, price, oldPrice, discount, rating, sold, image }: any) {
  return (
    <div className="bg-white border rounded-xl p-6 flex flex-col sm:flex-row gap-6 hover:shadow-lg transition-shadow">
      {/* Product Image Side */}
      <div className="relative w-full sm:w-48 h-64 sm:h-auto bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
        <Badge className="absolute top-2 right-2 bg-orange-500 border-none font-bold">
          -{discount}%
        </Badge>
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover"
        />
      </div>

      {/* Content Side */}
      <div className="flex flex-col flex-1 justify-between py-2">
        <div className="space-y-2">
          <span className="text-xs text-gray-400 font-medium uppercase">{category}</span>
          <h3 className="font-semibold text-gray-800 line-clamp-2 leading-tight">
            {title}
          </h3>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-gray-200 fill-gray-200" />
            ))}
          </div>
          <div className="flex items-center gap-3 pt-2">
            <span className="text-orange-600 font-bold text-xl">${price}</span>
            <span className="text-gray-400 line-through text-sm">${oldPrice}</span>
          </div>
        </div>

        {/* Timer & Stock Section */}
        <div className="mt-6 space-y-4">
          <div className="flex gap-2">
            <TimeUnit value="00" label="Days" />
            <TimeUnit value="00" label="Hrs" />
            <TimeUnit value="00" label="Min" />
            <TimeUnit value="00" label="Sec" />
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-bold uppercase text-gray-500">
              <span>Sold: {sold}</span>
              <span>Available: {100 - sold}</span>
            </div>
            <Progress value={sold} className="h-1.5 bg-gray-100 [&>div]:bg-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-orange-500 text-white w-10 h-10 rounded flex items-center justify-center font-bold text-sm">
        {value}
      </div>
      <span className="text-[10px] text-gray-400 uppercase mt-1 font-semibold">{label}</span>
    </div>
  );
}