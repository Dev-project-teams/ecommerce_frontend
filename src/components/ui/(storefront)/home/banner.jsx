"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useRef, useEffect } from "react";

// 👇 Autoplay plugin
function AutoplayPlugin(slider) {
  let timeout;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 3000); // 3 seconds
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });

  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

const banners = [
  {
    id: 1,
    src: "/banners/banner1.jpg",
    alt: "Big Sale 1",
    title: "Discover Amazing Products",
    subtitle: "Shop the latest trends with unbeatable prices and fast shipping..",
  },
  {
    id: 2,
    src: "/banners/banner2.jpg",
    alt: "New Arrivals",
    title: "Fresh Styles Just Dropped",
    subtitle: "Explore the latest trends now",
  },
  {
    id: 3,
    src: "/banners/banner3.jpg",
    alt: "Limited Offers",
    title: "Limited Time Offers",
    subtitle: "Don't miss out on our best deals",
  },
  {
    id: 4,
    src: "/banners/banner2.jpg",
    alt: "Limited Offers",
    title: "Another Limited Offer",
    subtitle: "Grab the best deal before it's gone!",
  },
];

export default function BannerCarousel() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      mode: "snap",
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            perView: 3,
            spacing: 8,
          },
        },
        "(min-width: 2400px)": {
          slides: {
            perView: 4,
            spacing: 8,
          },
        },
      },
      slides: {
        perView: 1,
        spacing: 8,
      },
    },
    [AutoplayPlugin] // 👈 Include plugin
  );

  return (
    <div ref={sliderRef} className="keen-slider overflow-hidden px-2">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="keen-slider__slide relative aspect-[16/6] rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />
          <div className="absolute bottom-10 inset-0 flex flex-col justify-center px-6 sm:px-10 text-white z-20">
            <h2 className="text-xl sm:text-2xl font-bold mb-1 drop-shadow-lg">
              {banner.title}
            </h2>
            <p className="text-xs sm:text-sm font-medium drop-shadow-md">
              {banner.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
