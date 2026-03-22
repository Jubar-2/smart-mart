import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <aside className="space-y-8 w-full">
      {/* Shop Categories */}
      <FilterWrapper title="Shop Categories">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {["Women Clothing", "Men Clothing", "Electronics", "Beauty & Personal Care", "Home & Garden"].map((cat) => (
            <li key={cat} className="hover:text-orange-600 cursor-pointer transition-colors flex items-center gap-2">
              <span className="text-orange-600">›</span> {cat}
            </li>
          ))}
        </ul>
      </FilterWrapper>

      {/* Price Filter */}
      <FilterWrapper title="Filter by Price">
        <div className="px-2 pt-4">
          <Slider defaultValue={[80, 10000]} max={10000} step={100} className="mb-4" />
          <div className="flex items-center justify-between">
            <Button size="sm" className="bg-orange-600 hover:bg-orange-700 h-8 px-4">Filter</Button>
            <span className="text-xs font-bold text-gray-500">$80 - $10000</span>
          </div>
        </div>
      </FilterWrapper>

      {/* Checkbox Filters (Color, Size, Brand) */}
      <FilterWrapper title="Filter by Color">
        <CheckboxGroup items={["Black", "Blue", "Pink", "Red"]} />
      </FilterWrapper>

      <FilterWrapper title="Filter by Size">
        <CheckboxGroup items={["L", "M", "XL", "XXL"]} />
      </FilterWrapper>

      <FilterWrapper title="Filter by Brand">
        <CheckboxGroup items={["All Brands", "Adidas", "Levi's", "Nike", "Samsung", "Yamaha"]} />
      </FilterWrapper>
    </aside>
  );
}

function FilterWrapper({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border rounded-lg p-5 shadow-sm">
      <h3 className="font-bold text-gray-800 mb-4 border-b pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-orange-600">
        {title}
      </h3>
      {children}
    </div>
  );
}

function CheckboxGroup({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item} className="flex items-center space-x-2">
          <Checkbox id={item} className="data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600" />
          <label htmlFor={item} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600 cursor-pointer">
            {item}
          </label>
        </div>
      ))}
    </div>
  );
}