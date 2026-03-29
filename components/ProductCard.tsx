import Image from "next/image";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductProps {
  title?: string;
  price?: number;
  oldPrice?: number;
  discount?: number;
  rating?: number;
  image?: string;
  category?: string;
}

export default function ProductCard({ title, price, oldPrice, discount, rating, image, category }: ProductProps) {
  return (
    <div className="group bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
        {discount && (
          <Badge className="absolute top-2 right-2 bg-orange-500 hover:bg-orange-600">
            -{discount}%
          </Badge>
        )}
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
           <Button size="icon" variant="secondary" className="rounded-full shadow-md"><Heart size={18}/></Button>
           <Button size="icon" variant="secondary" className="rounded-full shadow-md"><Eye size={18}/></Button>
           <Button size="icon" variant="secondary" className="rounded-full shadow-md"><ShoppingCart size={18}/></Button>
        </div>
      </div>
      
      <div className="p-4 space-y-1">
        <p className="text-xs text-muted-foreground">{category}</p>
        <h3 className="font-medium text-sm line-clamp-2 leading-tight h-10">{title}</h3>
        <div className="flex gap-0.5 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill={i < rating ? "currentColor" : "none"} />
          ))}
        </div>
        <div className="flex items-center gap-2 pt-1">
          <span className="font-bold text-orange-600">${price}</span>
          {oldPrice && <span className="text-sm text-gray-400 line-through">${oldPrice}</span>}
        </div>
      </div>
    </div>
  );
}