import { Send, RotateCcw, Headset, CreditCard } from "lucide-react";

const features = [
  {
    icon: <Send className="w-10 h-10 text-gray-400 group-hover:text-orange-600 transition-colors" />,
    title: "Free Worldwide Shipping",
    description: "Free shipping for all orders over $100 Contrary to popular belie",
  },
  {
    icon: <RotateCcw className="w-10 h-10 text-gray-400 group-hover:text-orange-600 transition-colors" />,
    title: "Money Back Guarantee",
    description: "We return money within 30 days",
  },
  {
    icon: <Headset className="w-10 h-10 text-gray-400 group-hover:text-orange-600 transition-colors" />,
    title: "24/7 Customer Support",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: <CreditCard className="w-10 h-10 text-gray-400 group-hover:text-orange-600 transition-colors" />,
    title: "Secure Online Payment",
    description: "We possess SSL / Secure Certificate",
  },
];

export default function ServiceFeatures() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="group flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-all duration-300 cursor-default"
        >
          <div className="flex-shrink-0">
            {feature.icon}
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}