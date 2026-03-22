import { Search, ShoppingBag, Heart, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CategoriesOption } from "../header/CategoriesOption";

export default function Header() {
  return (
    <header className="w-full">

      {/* Main Header */}
      <div className="border-b py-6 bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between gap-8">
          <div className="text-2xl font-bold flex items-center gap-1">
            <span className="text-orange-600 italic">Omni</span>mart
          </div>

          <div className="flex-1 max-w-2xl flex border rounded-md overflow-hidden">
            <div className="w-32 border-r bg-gray-50 flex items-center">
              <Select defaultValue="all">
                <SelectTrigger className="border-0 focus:ring-0 w-full">
                  <SelectValue placeholder="All" className="focus-visible:shadow-none" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input className="border-0 focus-visible:ring-0 flex-1 text-base py-6 px-4" placeholder="Search by product name..." />
            <Button variant="ghost" className="rounded-none px-4 py-6"><Search size={20} /></Button>
          </div>

          <div className="flex items-center gap-6">
            <HeaderIcon icon={<RefreshCw size={24} />} label="Compare" count={0} />
            <HeaderIcon icon={<Heart size={24} />} label="Wishlist" count={1} />
            <HeaderIcon icon={<ShoppingBag size={24} />} label="Cart" count={0} color="text-orange-600" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center gap-8">
          <CategoriesOption />
          <nav className="flex gap-6 font-medium text-sm text-gray-600">
            {["Home", "Shop", "Campaign", "Blog", "Pages", "Contact"].map(item => (
              <a key={item} href="#" className="hover:text-orange-600 transition-colors text-base">{item}</a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function HeaderIcon({ icon, label, count, color = "" }: any) {
  return (
    <div className="flex items-center gap-2 cursor-pointer relative group">
      <div className={`${color} relative`}>
        {icon}
        <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
          {count}
        </span>
      </div>
      <span className="text-xs font-medium hidden lg:block">{label}</span>
    </div>
  );
}