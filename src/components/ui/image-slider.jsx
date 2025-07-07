"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

export default function ImageGallery({ images = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Convert File objects into preview URLs if needed
  const getImageSrc = (img) => {
    if (typeof img === "string") return img;
    if (img.preview) return img.preview;
    if (img instanceof File) return URL.createObjectURL(img);
    if (img.file instanceof File) return URL.createObjectURL(img.file);
    return "";
  };

  // 🧹 Cleanup object URLs (prevent memory leaks)
  useEffect(() => {
    const objectUrls = images
      .map((img) =>
        img instanceof File || img?.file instanceof File
          ? URL.createObjectURL(img.file || img)
          : null
      )
      .filter(Boolean);

    return () => {
      objectUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  const handleThumbnailClick = (idx) => {
    instanceRef.current?.moveToIdx(idx);
  };

  return (
    <div className="space-y-4">
      {/* Main slider */}
      <div ref={sliderRef} className="keen-slider rounded-md overflow-hidden">
        {images.map((img, idx) => (
          <div key={idx} className="keen-slider__slide flex items-center justify-center bg-black">
            <img
              src={getImageSrc(img)}
              alt={`image-${idx}`}
              className="object-contain max-h-[400px] w-full"
            />
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => handleThumbnailClick(idx)}
            className={`cursor-pointer border-2 rounded-md overflow-hidden w-20 h-20 min-w-[80px] ${
              currentSlide === idx ? "border-blue-500" : "border-transparent"
            }`}
          >
            <img
              src={getImageSrc(img)}
              alt={`thumb-${idx}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
