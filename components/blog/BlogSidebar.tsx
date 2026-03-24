import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function BlogSidebar() {
  return (
    <aside className="space-y-8">
      {/* Search Widget */}
      <div className="relative">
        <Input 
          placeholder="Search blog" 
          className="pr-10 bg-white border-none shadow-sm focus-visible:ring-orange-500 h-12"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      </div>

      {/* Categories Widget */}
      <SidebarSection title="Blog Categories">
        <div className="h-20 flex items-center justify-center text-gray-400 italic text-sm">
          No categories available
        </div>
      </SidebarSection>

      {/* Recent Posts Widget */}
      <SidebarSection title="Most Recent Added Posts">
        <div className="space-y-4">
          {[8, 7, 6, 5].map((num) => (
            <div key={num} className="flex gap-3 group cursor-pointer">
              <div className="relative w-16 h-12 rounded overflow-hidden shrink-0">
                <Image src={`/blog-thumb-${num}.jpg`} alt="" fill className="object-cover" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-[13px] font-bold text-gray-800 group-hover:text-orange-600 transition-colors leading-snug">
                  Fashion and Beauty Series {num}
                </h4>
                <p className="text-[11px] text-gray-400">by Admin</p>
              </div>
            </div>
          ))}
        </div>
      </SidebarSection>

      {/* Tags Widget */}
      <SidebarSection title="Popular Tags">
        <div className="flex flex-wrap gap-2">
          {["mobile", "phone", "camera", "laptop"].map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="rounded-sm font-normal text-gray-400 border-gray-200 px-3 py-1 cursor-pointer hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </SidebarSection>
    </aside>
  );
}

function SidebarSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-sm shadow-sm">
      <h3 className="font-bold text-gray-800 text-sm mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-orange-600">
        {title}
      </h3>
      {children}
    </div>
  );
}