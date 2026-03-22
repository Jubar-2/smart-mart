import Sidebar from "@/components/products/Sidebar";
import ShopHeader from "@/components/products/ProductsHeader";
import ProductCard from "@/components/ProductCard"; // Use your existing card
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ShopPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar (25% Width) */}
          <div className="w-full lg:w-1/4">
            <Sidebar />
          </div>

          {/* Right Main Content (75% Width) */}
          <div className="w-full lg:w-3/4">
            <ShopHeader />

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {/* Replace with your product mapping */}
              {[...Array(16)].map((_, i) => (
                <ProductCard key={i} /* pass your props here */ />
              ))}
            </div>

            {/* Pagination Component */}
            <div className="flex justify-center mt-12 gap-2">
              <PaginationButton icon={<ChevronLeft size={16}/>} />
              <PaginationButton label="1" active />
              <PaginationButton label="2" />
              <PaginationButton label="3" />
              <PaginationButton label="4" />
              <PaginationButton icon={<ChevronRight size={16}/>} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function PaginationButton({ label, icon, active }: { label?: string; icon?: React.ReactNode; active?: boolean }) {
  return (
    <button className={`w-10 h-10 rounded border flex items-center justify-center transition-colors ${
      active 
      ? "bg-orange-600 border-orange-600 text-white" 
      : "bg-white text-gray-400 hover:border-orange-600 hover:text-orange-600"
    }`}>
      {label || icon}
    </button>
  );
}