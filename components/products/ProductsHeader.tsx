import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductsHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 border rounded-lg mb-6 shadow-sm">
      <div className="flex items-center gap-4">
        <Button variant="outline" className="flex gap-2">
          <SlidersHorizontal size={16} /> Quick Filter
        </Button>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Sort by:</span>
          <Select defaultValue="all">
            <SelectTrigger className="w-45">
              <SelectValue placeholder="All Products" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              <SelectItem value="low">Price: Low to High</SelectItem>
              <SelectItem value="high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <p className="text-sm text-muted-foreground">Showing: 1 - 16 Items</p>
        <div className="flex items-center gap-1">
          <Button size="icon" className="bg-orange-600 hover:bg-orange-700 h-8 w-8">
            <LayoutGrid size={16} />
          </Button>
          <Button size="icon" variant="outline" className="h-8 w-8 text-gray-400">
            <List size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}