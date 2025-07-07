"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { X } from "lucide-react";

export default function ImageUploader({
  multiple = true,
  maxSize = 2, // MB per file
  maxFiles = 5, // Max number of files total
  onChange,
}) {
  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    const remainingSlots = maxFiles - images.length;
    if (remainingSlots <= 0) {
      alert(`You can only upload up to ${maxFiles} images.`);
      return;
    }

    const limitedFiles = acceptedFiles.slice(0, remainingSlots);

    const validFiles = limitedFiles.filter((file) => {
      const isValid = file.size / 1024 / 1024 <= maxSize;
      if (!isValid) {
        alert(`"${file.name}" exceeds the ${maxSize}MB limit.`);
      }
      return isValid;
    });

    const newImages = validFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    const updated = multiple ? [...images, ...newImages] : newImages;

    setImages(updated);
    onChange?.(updated.map((img) => img.file));
  };

  const handleRemove = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
    onChange?.(updated.map((img) => img.file));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple,
  });

  return (
    <div className="space-y-2">
      <div
        {...getRootProps()}
        className={`border border-dashed rounded-md p-6 text-center cursor-pointer transition ${
          isDragActive
            ? "bg-blue-50 border-blue-500"
            : "bg-white dark:bg-black/10 border-gray-300 dark:border-gray-600"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {isDragActive
            ? "Drop the files here..."
            : `Click or drag image${multiple ? "s" : ""} to upload (max ${maxSize}MB, max ${maxFiles} images)`}
        </p>
      </div>

      {images.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-2">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-24 h-24 rounded-md overflow-hidden border"
            >
              <img
                src={img.preview}
                alt={`preview-${idx}`}
                className="object-cover w-full h-full"
              />
              <button
                onClick={() => handleRemove(idx)}
                className="absolute top-0 right-0 bg-white dark:bg-black text-red-500 p-1 rounded-bl-md"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
