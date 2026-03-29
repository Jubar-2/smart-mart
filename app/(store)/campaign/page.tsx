import { Home, ChevronRight } from "lucide-react";
import GlobalTimer from "@/components/campaign/GlobalTimer";
import ProductCard from "@/components/ProductCard"; // Your existing component

export default function CampaignPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-6">
      <div className="container mx-auto px-4">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <Home size={14} className="text-gray-400" />
          <span className="hover:text-orange-600 cursor-pointer">Home</span>
          <ChevronRight size={14} />
          <span className="text-gray-400">Campaign Products</span>
        </nav>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 border-b pb-4 border-gray-200">
          <div className="relative">
            <h1 className="text-3xl font-bold text-gray-800">Deals Of The Week</h1>
            {/* The orange underline from the design */}
            <div className="absolute -bottom-4.5 left-0 w-2/3 h-0.75 bg-orange-600 rounded-full" />
          </div>

          <GlobalTimer />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {/* Example Data Mapping */}
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              category={product.category}
              price={product.price}
              oldPrice={product.oldPrice}
              rating={4} // Default rating if not provided      
              image={product.image} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}

// Mock Data for the campaign
const products = [
  {
    id: 1,
    title: "UMIDIGI A9 Pro Android Mobile Phone...",
    category: "Electronics",
    price: 1573.03,
    oldPrice: 1910.11,
    badge: { label: "Flash deal", color: "bg-green-500" },
    image: "/phone-1.png"
  },
  {
    id: 2,
    title: "2021 Summer Women Clothing Ropa Sex...",
    category: "Women Clothing",
    price: 144.83,
    oldPrice: 189.78,
    badge: { label: "Best", color: "bg-gray-900" },
    image: "/clothes-1.png"
  },
  {
    id: 3,
    title: "Top Sale High Quality Newest Design...",
    category: "Women Clothing",
    price: 69.55,
    badge: { label: "Feature", color: "bg-orange-400" },
    image: "/clothes-2.png"
  },
  {
    id: 4,
    title: "New Arrive Spring Fall Women Clothi...",
    category: "Women Clothing",
    price: 144.83,
    oldPrice: 189.78,
    badge: { label: "Top", color: "bg-blue-500" },
    image: "/clothes-3.png"
  },
  {
    id: 5,
    title: "Dropshipping EIS 2.4 inch LCD Full...",
    category: "Electronics",
    price: 134.83,
    oldPrice: 189.78,
    badge: { label: "Flash deal", color: "bg-green-500" },
    image: "/camera.png"
  }
];