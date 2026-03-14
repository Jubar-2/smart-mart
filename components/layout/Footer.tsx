import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Youtube, 
  Instagram, 
  ChevronUp, 
  Mail 
} from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Get in Touch */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <p><span className="font-semibold text-gray-900">Address:</span> 514 S. Magnolia St. Orlando, FL 32806, USA</p>
              <p><span className="font-semibold text-gray-900">Phone:</span> 453876234</p>
              <p><span className="font-semibold text-gray-900">Email:</span> demoemail123@gmail.com</p>
              <p><span className="font-semibold text-gray-900">Saturday-Sunday:</span> 9:27 PM - 9:27 PM</p>
            </div>
            <div className="flex gap-3 pt-4">
              <SocialIcon icon={<Facebook size={18} />} color="bg-blue-600" />
              <SocialIcon icon={<Twitter size={18} />} color="bg-sky-400" />
              <SocialIcon icon={<Youtube size={18} />} color="bg-red-600" />
              <SocialIcon icon={<Instagram size={18} />} color="bg-orange-600" />
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Useful Links</h4>
            <ul className="grid grid-cols-1 gap-3 text-sm text-gray-600">
              {['Faq', 'About Us', 'Privacy Policy', 'Terms & Service', 'Return Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-orange-600 transition-colors flex items-center gap-2">
                    <span className="text-gray-400">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-gray-600">
              Subscribe to our Newsletter to receive early discount offers, latest news, sales and promo information.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="email" 
                  placeholder="Your e-mail" 
                  className="pl-10 focus-visible:ring-orange-500"
                />
              </div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Payment Methods & Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 grayscale opacity-70">
            {/* Replace with actual payment SVGs/Images */}
            <img src="/payments/visa.svg" alt="Visa" className="h-6" />
            <img src="/payments/mastercard.svg" alt="Mastercard" className="h-6" />
            <img src="/payments/paypal.svg" alt="Paypal" className="h-6" />
            <img src="/payments/skrill.svg" alt="Skrill" className="h-6" />
          </div>
          <p className="text-xs text-gray-500 italic">
            © {currentYear} OmniMart. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Floating Action: Back to Top */}
      <div className="fixed bottom-24 right-6 z-50">
        <Button size="icon" className="rounded-full bg-gray-800 hover:bg-orange-600 shadow-xl">
          <ChevronUp size={20} />
        </Button>
      </div>

      {/* Cookie Consent Bar (Visible at bottom) */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 text-white py-4 px-6 z-[100] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-300">
          Your experience on this site will be improved by allowing cookies.
        </p>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8">
          Allow Cookies
        </Button>
      </div>
    </footer>
  );
};

// Helper component for social icons
const SocialIcon = ({ icon, color }: { icon: React.ReactNode; color: string }) => (
  <a 
    href="#" 
    className={`${color} text-white p-2 rounded hover:opacity-80 transition-opacity`}
  >
    {icon}
  </a>
);

export default Footer;