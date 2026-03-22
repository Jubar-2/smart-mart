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
    <div className="container mx-auto px-4 py-8 space-y-12">
      <HeroSection />
      <ServiceFeatures />
      <DealsOfTheWeek />

      {/* Three-column promo banners */}
      <PromoGrid items={[
        { title: "Watch", discount: "50% OFF", image: "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/16365336391.jpg", bgColor: "bg-white" },
        { title: "Drone", discount: "40% OFF", image: "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/16365336392.jpg", bgColor: "bg-white" },
        { title: "Phone", discount: "30% OFF", image: "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/16365336393.jpg", bgColor: "bg-white" },
      ]} />

      <CategoryTabs title="Popular Categories" categories={["Women Clothing", "Men Clothing", "Electronics", "Beauty"]} />

      <FlashDeal />

      <CategoryTabs title="Featured Categories" categories={["Women Clothing", "Web Themes", "Electronics"]} />

      <BlogSection />
      <BrandLogos />
    </div>
  );
}