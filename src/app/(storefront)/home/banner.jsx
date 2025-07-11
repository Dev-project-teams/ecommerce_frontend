"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const banners = [
    { id: 1, src: "/banners/banner1.jpg", alt: "Big Sale 1" },
    { id: 2, src: "/banners/banner2.jpg", alt: "New Arrivals" },
    { id: 3, src: "/banners/banner3.jpg", alt: "Limited Offers" },
];

export default function BannerCarousel() {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        slides: { perView: 1 },
    });

    return (
        <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden shadow-md">
            {banners.map((banner) => (
                <div
                    key={banner.id}
                    className="keen-slider__slide relative aspect-[16/6] w-full"
                >
                    <Image
                        src={banner.src}
                        alt={banner.alt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            ))}
        </div>
    );
}
