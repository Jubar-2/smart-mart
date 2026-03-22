import { Truck, RotateCcw, ShieldCheck, Headphones } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Truck className="w-10 h-10 text-blue-700" />,
      title: "Fast Delivery",
      description: "All Order over $100",
    },
    {
      icon: <RotateCcw className="w-10 h-10 text-blue-700" />,
      title: "7 Day Return",
      description: "If goods have problems", // Corrected grammar slightly
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-700" />,
      title: "Secure Payment",
      description: "100% Secure Payment",
    },
    {
      icon: <Headphones className="w-10 h-10 text-blue-700" />,
      title: "24/7 Support",
      description: "Dedicated Supports",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white p-6 rounded-sm shadow-sm border border-gray-100"
          >
            {/* Icon Container */}
            <div className="shrink-0">
              {feature.icon}
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
              <h3 className="font-bold text-gray-900 text-lg leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1 font-medium">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};