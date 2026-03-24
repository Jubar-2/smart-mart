"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import {
    Star,
    Minus,
    Plus,
    MessageCircle,
    Truck,
    Facebook,
    Twitter,
    Linkedin,
    Mail,
    Check
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ProductTabs from '@/components/products/ProductTabs';
import RelatedProducts from '@/components/products/Frequently'

const PRODUCT = {
    name: "ASUS ROG Phone 5 Dual Sim S888 Phantom",
    rating: 3.67,
    reviews: 3,
    brand: {
        name: "HERMES",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Herm%C3%A8s_logo.svg/1200px-Herm%C3%A8s_logo.svg.png"
    },
    price: 351.00,
    points: 702,
    memoryOptions: ["8/256 GB"],
    images: [
        "/rog-phone-1.png", // Replace with your actual assets
        "/rog-phone-2.png",
        "/rog-phone-3.png"
    ]
};

export default function ProductDetail() {
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(PRODUCT.images[0]);

    return (
        <>
            <div className="max-w-7xl mx-auto p-4 md:p-8 bg-white rounded-lg shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left: Product Gallery (5 cols) */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="relative aspect-square border rounded-lg overflow-hidden flex items-center justify-center p-8 bg-white">
                            <img
                                src={mainImage}
                                alt={PRODUCT.name}
                                className="max-h-full w-auto object-contain transition-all duration-300"
                            />
                        </div>

                        <div className="flex gap-4">
                            {PRODUCT.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setMainImage(img)}
                                    className={`w-24 h-24 border-2 rounded p-2 transition-all ${mainImage === img ? 'border-orange-500' : 'border-gray-100 hover:border-gray-300'
                                        }`}
                                >
                                    <img src={img} alt="thumb" className="w-full h-full object-contain" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Info (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-2xl font-bold text-gray-800 leading-tight">
                                {PRODUCT.name}
                            </h1>
                            <div className="flex items-center gap-4 text-sm">
                                <span className="text-gray-400 font-medium">{PRODUCT.rating}</span>
                                <div className="flex text-orange-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            fill={i < 4 ? "currentColor" : "none"}
                                            className={i < 4 ? "" : "text-gray-200"}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-400 border-l pl-4">({PRODUCT.reviews} Ratings)</span>
                            </div>
                        </div>

                        <Separator />

                        {/* Brand Info */}
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 border rounded p-2 flex items-center justify-center">
                                <img src={PRODUCT.brand.logo} alt="brand" className="max-w-full grayscale" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Brand</p>
                                <h3 className="font-bold text-gray-800">{PRODUCT.brand.name}</h3>
                                <a href="#" className="text-xs text-gray-400 hover:text-orange-500 underline">View other products</a>
                            </div>
                        </div>

                        {/* Price Section */}
                        <div className="flex items-baseline gap-4">
                            <span className="text-xs text-gray-400 font-medium">Price</span>
                            <div className="flex items-center gap-2">
                                <span className="text-3xl font-bold text-orange-500">${PRODUCT.price.toFixed(2)}</span>
                                <span className="text-xs text-gray-400">/pc</span>
                                <div className="flex items-center gap-1 bg-orange-400 text-white px-2 py-0.5 rounded text-[10px] font-bold">
                                    <span className="border border-white rounded-full w-3 h-3 flex items-center justify-center text-[8px]">C</span>
                                    {PRODUCT.points}
                                </div>
                            </div>
                        </div>

                        {/* Variants */}
                        <div className="flex items-center gap-8">
                            <span className="text-xs text-gray-400 font-medium w-12">Memory</span>
                            <button className="border-2 border-orange-400 text-gray-800 font-bold px-4 py-2 text-xs rounded-sm bg-orange-50">
                                8/256 GB
                            </button>
                        </div>

                        {/* Status Boxes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-orange-50 border border-orange-200 rounded p-4 space-y-2">
                                <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
                                    <Check size={14} className="text-gray-400" /> Out of Stock
                                </div>
                                <button className="flex items-center gap-2 text-xs font-bold text-orange-500 hover:underline">
                                    <MessageCircle size={14} /> Contact Admin
                                </button>
                            </div>

                            <div className="bg-gray-50 border border-gray-100 rounded p-4 flex items-start gap-4">
                                <Truck className="text-gray-400 mt-1" size={24} strokeWidth={1.5} />
                                <div>
                                    <h4 className="text-xs font-bold text-gray-800">Estimated delivery time</h4>
                                    <p className="text-sm text-gray-500">1 - 5 days</p>
                                </div>
                            </div>
                        </div>

                        {/* Quantity and Actions */}
                        <div className="space-y-6 pt-4">
                            <div className="flex items-center gap-8">
                                <span className="text-xs text-gray-400 font-medium w-12">Quantity</span>
                                <div className="flex items-center border rounded overflow-hidden">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-2 hover:bg-gray-100 border-r"
                                    >
                                        <Minus size={14} className="text-gray-400" />
                                    </button>
                                    <div className="w-12 text-center text-sm font-medium">{quantity}</div>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="p-2 hover:bg-gray-100 border-l"
                                    >
                                        <Plus size={14} className="text-gray-400" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-8">
                                <span className="text-xs text-gray-400 font-medium w-12">Total Price</span>
                                <span className="text-2xl font-bold text-orange-500">
                                    ${(PRODUCT.price * quantity).toFixed(2)}
                                </span>
                            </div>

                            <div className="space-y-2">
                                <Button variant="outline" className="w-full py-6 text-gray-700 font-bold border-gray-200">
                                    Buy Now
                                </Button>
                                <Button className="w-full py-6 bg-gray-900 hover:bg-black text-white font-bold">
                                    Add to Cart
                                </Button>
                            </div>
                        </div>

                        {/* Social Share */}
                        <div className="flex items-center gap-4 pt-4">
                            <span className="text-xs text-gray-400 font-medium">Share</span>
                            <div className="flex gap-2">
                                <SocialBtn icon={<Facebook size={16} />} color="bg-[#3b5998]" />
                                <SocialBtn icon={<Twitter size={16} />} color="bg-[#1da1f2]" />
                                <SocialBtn icon={<Linkedin size={16} />} color="bg-[#0077b5]" />
                                <SocialBtn icon={<Mail size={16} />} color="bg-[#333333]" />
                                <SocialBtn icon={<MessageCircle size={16} />} color="bg-[#25d366]" />
                            </div>
                        </div>
                    </div>
                </div>
                <ProductTabs />
                <RelatedProducts/>
            </div>
            
        </>

    );
}

function SocialBtn({ icon, color }: { icon: React.ReactNode, color: string }) {
    return (
        <button className={`w-8 h-8 rounded-full text-white flex items-center justify-center transition-opacity hover:opacity-80 ${color}`}>
            {icon}
        </button>
    );
}