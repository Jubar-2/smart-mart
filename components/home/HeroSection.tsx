import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div
        className="col-span-12 lg:col-span-8 h-[450px] bg-pink-100 rounded-xl relative overflow-hidden flex items-center px-12 
        bg-[url(https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/16343905891630493728s2.jpg)]">
        <div className="max-w-md space-y-4 z-10">
          <h2 className="text-orange-600 font-bold text-4xl uppercase">50% OFF</h2>
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">Sleeve Party Dress</h1>
          <Button size="lg" className="bg-orange-600">Shop Now</Button>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
        <PromoBanner title="Watch" discount="50% OFF"
          image="https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/ONMF222.jpg"
          bgColor="bg-[#ff6b01]" textColor="text-white" />
        <PromoBanner title="Man" discount="40% OFF"
          image="https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/24gX1111.jpg"
          bgColor="bg-[#ff6b01]" textColor="text-white" />
      </div>
    </div>
  );
}

function PromoBanner({ title, discount, image, bgColor, textColor }: any) {
  return (
    <div className={`${bgColor} ${textColor} h-[213px] rounded-xl flex items-center justify-between px-8 relative overflow-hidden`}>
      <div className="z-10">
        <p className="font-bold text-lg">{discount}</p>
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
      <img src={image} className="absolute right-0 h-100% w-100% object-contain ease-in-out transition duration-200 hover:scale-110" alt={title} />
    </div>
  );
}