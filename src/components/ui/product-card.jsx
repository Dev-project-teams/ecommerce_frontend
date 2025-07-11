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
                        <span className="text-sm ml-2">({reviews})</span>
                    </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold">${price}</span>
                            {originalPrice && (<span className="text-sm text-gray-500 line-through">${originalPrice}</span>)}
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
