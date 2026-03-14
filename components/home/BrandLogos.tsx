import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BRANDS = [
  { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
  { name: "Levi's", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Levi%27s_logo.svg" },
  { name: "Sax", logo: "/logos/sax-placeholder.svg" }, // Replace with your local asset
  { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
];

export default function BrandLogos() {
  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Popular Brands</h2>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="w-8 h-8 rounded-full text-gray-400 hover:bg-orange-600 hover:text-white transition-colors"
          >
            <ChevronLeft size={16} />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="w-8 h-8 rounded-full text-gray-400 hover:bg-orange-600 hover:text-white transition-colors"
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {BRANDS.map((brand, index) => (
          <div 
            key={index} 
            className="group h-32 bg-white border border-gray-100 rounded-lg flex items-center justify-center p-8 hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}