import { 
  List, 
  ChevronDown, 
  Star, 
  ArrowDownUp, 
  Filter,
  MessageSquare
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductTabs() {
  const ratingData = [
    { stars: 5, count: 1, percent: 80 },
    { stars: 4, count: 1, percent: 80 },
    { stars: 3, count: 0, percent: 0 },
    { stars: 2, count: 1, percent: 40 },
    { stars: 1, count: 0, percent: 0 },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-12 space-y-6 px-4 md:px-0">
      <Accordion type="multiple" defaultValue={["description", "reviews"]} className="space-y-6">
        
        {/* Description Section */}
        <AccordionItem value="description" className="border rounded-lg overflow-hidden shadow-sm">
          <AccordionTrigger className="bg-[#f39c12] hover:no-underline px-6 py-4 text-white group">
            <div className="flex items-center gap-3">
              <List size={20} />
              <span className="font-bold text-lg">Description</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-8 text-gray-600 leading-relaxed text-[15px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </AccordionContent>
        </AccordionItem>

        {/* Rating & Reviews Section */}
        <AccordionItem value="reviews" className="border rounded-lg overflow-hidden shadow-sm">
          <AccordionTrigger className="bg-[#f39c12] hover:no-underline px-6 py-4 text-white">
            <div className="flex items-center gap-3">
              <Star size={20} />
              <span className="font-bold text-lg">Rating & Reviews</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0">
            {/* Rating Summary Box */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b">
              {/* Left: Big Score */}
              <div className="text-center md:border-r space-y-2">
                <h2 className="text-7xl font-medium text-gray-700">3.67</h2>
                <p className="text-gray-400 font-medium">Out of 5.00</p>
                <div className="flex justify-center text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={22} fill={i < 4 ? "currentColor" : "none"} className={i < 4 ? "" : "text-gray-200"} />
                  ))}
                </div>
                <p className="text-xs text-gray-400 font-medium">3 Ratings</p>
              </div>

              {/* Right: Star Progress Bars */}
              <div className="space-y-3 px-0 md:px-12">
                {ratingData.map((item) => (
                  <div key={item.stars} className="flex items-center gap-4">
                    <div className="flex gap-0.5 w-24">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          fill={i < item.stars ? "#f39c12" : "none"} 
                          className={i < item.stars ? "text-[#f39c12]" : "text-gray-200"} 
                        />
                      ))}
                    </div>
                    <Progress value={item.percent} className="h-2 flex-1 bg-gray-100 [&>div]:bg-gray-400" />
                    <span className="text-xs text-gray-400 w-4">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Review Filters */}
            <div className="bg-gray-50/50">
              <div className="flex flex-col sm:flex-row justify-between border-b">
                <div className="px-8 py-4 font-bold text-gray-800 text-sm flex items-center">
                  Product Reviews
                </div>
                <div className="flex">
                  <button className="flex items-center gap-2 px-6 py-4 text-sm text-gray-500 border-l hover:bg-gray-100 transition-colors">
                    <ArrowDownUp size={16} /> Sort : Latest first
                  </button>
                  <button className="flex items-center gap-2 px-6 py-4 text-sm text-gray-500 border-l hover:bg-gray-100 transition-colors">
                    <Filter size={16} /> Filter : All Star
                  </button>
                </div>
              </div>
              
              {/* Empty State */}
              <div className="py-20 flex flex-col items-center justify-center space-y-4">
                <div className="text-gray-400 opacity-20">
                    <MessageSquare size={48} />
                </div>
                <p className="text-gray-500 font-medium italic">
                  No reviews found for this product
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}