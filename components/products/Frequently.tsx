import React from 'react';
import Image from 'next/image';
import { ShoppingCart, Heart, RefreshCw, CircleDollarSign } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  points: number;
  image: string;
  discount?: string;
  isOption?: boolean;
}

const ProductGridSection = ({ title, products }: { title: string, products: Product[] }) => {
  return (
    <section className="py-8 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <GridCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GridCard = ({ product }: { product: Product }) => {
  return (
    <Card className="group border border-gray-100 rounded-sm shadow-none hover:shadow-xl transition-all duration-300 bg-white">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative h-56 w-full flex items-center justify-center p-6 bg-white overflow-hidden">
          {product.discount && (
            <div className="absolute top-0 left-4 bg-[#e74c3c] text-white text-[10px] font-bold py-2 px-1 flex flex-col items-center uppercase leading-none z-10">
              <span className="[writing-mode:vertical-lr] rotate-180">OFF {product.discount}</span>
            </div>
          )}
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content Area */}
        <div className="p-4 space-y-3">
          {/* Price Area */}
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-gray-800">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-300 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-[13px] text-gray-500 leading-snug h-10 line-clamp-2">
            {product.title}
          </h3>

          {/* Points Badge */}
          <div className="inline-flex items-center gap-1 bg-[#f39c12] text-white px-2 py-1 rounded-sm">
            <CircleDollarSign size={14} fill="white" className="text-[#f39c12]" />
            <span className="text-xs font-bold">{product.points}</span>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-50">
            <button className="flex items-center gap-2 text-[13px] font-bold text-gray-800 hover:text-orange-500 transition-colors uppercase tracking-tight">
              <ShoppingCart size={16} />
              {product.isOption ? "Select Option" : "Buy Now"}
            </button>
            
            <div className="flex items-center gap-3 text-gray-400">
              <Heart size={18} className="cursor-pointer hover:text-orange-500 transition-colors" />
              <RefreshCw size={18} className="cursor-pointer hover:text-orange-500 transition-colors" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Example Usage Component
export default function RelatedProducts() {
  const boughtTogether = [
    { id: 1, title: "Nokia 6300 4G Dual SIM | WiFi Hotspot | Social Apps", price: 80.00, points: 160, image: "/phone1.png" },
    { id: 2, title: "ASUS ROG Phone 2 (New) Unlocked GSM US Version", price: 301.00, points: 602, image: "/phone2.png" },
    { id: 3, title: "2021 Apple 12.9-inch iPad Pro (Wi-Fi, 256GB) - Space Gray", price: 800.00, points: 1600, image: "/ipad.png" },
    { id: 4, title: "Samsung Galaxy S21 5G Smartphone SIM Free Android", price: 191.90, oldPrice: 202.00, points: 404, image: "/phone3.png", discount: "5%", isOption: true },
  ];

  const moreItems = [
    { id: 5, title: "HP ENVY x360 Convert 13-bd0031nr", price: 629.10, oldPrice: 699.00, points: 1398, image: "/laptop.png", discount: "10%" },
    { id: 6, title: "Huggies Wonder Pants with Bubble Bed Technology XL", price: 23.00, points: 46, image: "/diaper.png" },
    { id: 7, title: "Baby Girl Birthday Dress Set Little Girls Floral Lace", price: 65.00, points: 130, image: "/dress.png" },
    { id: 8, title: "BEN MARTIN Regular Men Grey Jeans", price: 100.00, points: 200, image: "/jeans.png" },
  ];

  return (
    <div className="space-y-4">
      <ProductGridSection title="Frequently Bought Together" products={boughtTogether} />
      <ProductGridSection title="More Items to Explore" products={moreItems} />
    </div>
  );
}