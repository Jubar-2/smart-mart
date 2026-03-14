import Image from 'next/image';

interface PromoItem {
  title: string;
  discount: string;
  image: string;
  bgColor: string;
  textColor?: string;
}

interface PromoGridProps {
  items: PromoItem[];
}

export default function PromoGrid({ items }: PromoGridProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
      {items.map((item, index) => (
        <div 
          key={index}
          className={`${item.bgColor} rounded-xl p-8 flex items-center justify-between relative overflow-hidden h-[180px] group cursor-pointer`}
        >
          {/* Text Content */}
          <div className="z-10 space-y-1">
            <p className="text-orange-600 font-bold text-sm uppercase tracking-tight">
              {item.discount}
            </p>
            <h3 className={`text-3xl font-extrabold ${item.textColor || 'text-gray-800'}`}>
              {item.title}
            </h3>
          </div>

          {/* Product Image */}
          <div className="relative w-1/2 h-full transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain object-right"
            />
          </div>
        </div>
      ))}
    </section>
  );
}