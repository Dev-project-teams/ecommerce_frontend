'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function ProductCard({
    id,
    name,
    price,
    originalPrice,
    image,
    rating,
    reviews,
    isOnSale
}) {
    const [isWishListed, setIsWishListed] = useState(false);

    const addToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Added to cart:', id);
    };

    const toggleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsWishListed(!isWishListed);
    };

    return (
        <Link href={`/products/${id}`} className="block group cursor-pointer">
            <Card className="overflow-hidden transition-shadow hover:shadow-lg  py-0 relative">
                <div className="relative overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        width={200}
                        height={100}
                        className="w-full h-64 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />

                    {isOnSale && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-medium">
                            Sale
                        </span>
                    )}

                    <button onClick={toggleWishlist}
                        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white rounded-full transition-colors"                    >
                        <i className={`${isWishListed ? 'ri-heart-fill text-red-500' : 'ri-heart-line'} text-sm`}></i>
                    </button>
                </div>

                <CardContent className="p-4">
                    <div className="flex">

                        <h3 className="font-medium mb-2 line-clamp-2">{name}</h3>

                        <div className="flex items-center float-end mb-2">
                            {[...Array(5)].map((_, i) => (
                                <i key={i}
                                    className={`${i < Math.floor(rating) ? 'ri-star-fill text-yellow-400' : 'ri-star-line text-gray-300'} text-sm`}></i>
                            ))}


                        </div>
                    </div>

                    <div className="flex flex-col ">
                        <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold">${price}</span>
                            {originalPrice && (<span className="text-sm text-gray-500 line-through">${originalPrice}</span>)}
                            <div class="flex items-center ms-auto ">
                                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                            </div>
                        </div>
                        <Button onClick={addToCart} className="text-sm px-4 py-2">
                            Add to Cart
                        </Button>
                    </div>
                </CardContent>
            </Card>

        </Link>
    );
}
