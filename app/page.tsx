import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServiceFeatures from "@/components/home/ServiceFeatures";
import DealsOfTheWeek from "@/components/home/DealsOfTheWeek";
import PromoGrid from "@/components/home/PromoGrid";
import CategoryTabs from "@/components/home/CategoryTabs";
import FlashDeal from "@/components/home/FlashDeal";
import BlogSection from "@/components/home/BlogSection";
import BrandLogos from "@/components/home/BrandLogos";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 space-y-12">
        <HeroSection />
        <ServiceFeatures />
        <DealsOfTheWeek />
        
        {/* Three-column promo banners */}
        <PromoGrid items={[
          { title: "Watch", discount: "50% OFF", image: "/watch-promo.png", color: "bg-orange-50" },
          { title: "Drone", discount: "40% OFF", image: "/drone-promo.png", color: "bg-blue-50" },
          { title: "Phone", discount: "30% OFF", image: "/phone-promo.png", color: "bg-yellow-50" },
        ]} />

        <CategoryTabs title="Popular Categories" categories={["Women Clothing", "Men Clothing", "Electronics", "Beauty"]} />
        
        <FlashDeal />
        
        <CategoryTabs title="Featured Categories" categories={["Women Clothing", "Web Themes", "Electronics"]} />
        
        <BlogSection />
        <BrandLogos />
      </div>

      <Footer />
    </main>
  );
}