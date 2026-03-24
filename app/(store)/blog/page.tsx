import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";

const BLOGS = [
  { id: 8, image: "/blog-1.jpg", title: "Fashion and Beauty Series 8", author: "Admin", date: "31st May, 2021", excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quae illo soluta sapiente minus voluptatibus molesti..." },
  { id: 7, image: "/blog-2.jpg", title: "Fashion and Beauty Series 7", author: "Admin", date: "31st May, 2021", excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quae illo soluta sapiente minus voluptatibus molesti..." },
  { id: 6, image: "/blog-3.jpg", title: "Fashion and Beauty Series 6", author: "Admin", date: "31st May, 2021", excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quae illo soluta sapiente minus voluptatibus molesti..." },
  { id: 5, image: "/blog-4.jpg", title: "Fashion and Beauty Series 5", author: "Admin", date: "31st May, 2021", excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quae illo soluta sapiente minus voluptatibus molesti..." },
];

export default function BlogListingPage() {
  return (
    <div className="bg-[#f2f4f5] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Area */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BLOGS.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
              ))}
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="w-full lg:w-[320px] order-1 lg:order-2">
            <BlogSidebar />
          </div>

        </div>
      </div>
    </div>
  );
}