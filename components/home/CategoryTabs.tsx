"use client";

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";

interface CategoryTabsProps {
  title: string;
  categories: string[];
  // In a real app, you'd pass product data as props
}

export default function CategoryTabs({ title, categories }: CategoryTabsProps) {
  // Demo data to populate the grid
  const demoProducts = [
    {
      title: "Women's Women Clothing Women Dresse...",
      price: 144.83,
      oldPrice: 189.78,
      discount: 29,
      rating: 4,
      category: "Women Clothing",
      image: "https://images.unsplash.com/photo-1539109132382-381bb3f1cffb?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "New Women's Square Collar Pleated L...",
      price: 144.83,
      rating: 0,
      category: "Women Clothing",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "OEM Morden Fashion Design Women Clo...",
      price: 144.83,
      oldPrice: 189.78,
      discount: 29,
      rating: 5,
      category: "Women Clothing",
      image: "https://images.unsplash.com/photo-1529139513065-07b2c2390598?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "New arrivals Hot Sale Summer New Wo...",
      price: 144.83,
      oldPrice: 189.78,
      discount: 29,
      rating: 0,
      category: "Women Clothing",
      image: "https://images.unsplash.com/photo-1490481658541-91991034c7cb?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-8">
      <Tabs defaultValue={categories[0]} className="w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b mb-8 gap-4">
          <h2 className="text-2xl font-bold text-gray-800 pb-2">{title}</h2>
          
          <TabsList className="bg-transparent h-auto p-0 flex-wrap justify-start">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 text-sm font-medium text-gray-500 transition-all 
                           data-[state=active]:border-orange-600 data-[state=active]:text-orange-600 data-[state=active]:shadow-none 
                           hover:text-orange-500"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Content Section */}
        {categories.map((cat) => (
          <TabsContent key={cat} value={cat} className="mt-0 outline-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {demoProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}