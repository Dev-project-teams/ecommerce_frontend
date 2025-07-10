"use client"

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { generalInformation } from "../utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import GroupedSelect from "@/components/ui/group-select";
import { useState } from "react";
import ImageUploader from "@/components/ui/image-uploader";
import ImageGallery from "@/components/ui/image-slider";

export default function ProductCreate() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedVariantValues, setSelectedVariantValues] = useState([]);
    const categoryVariants = selectedCategory && selectedCategory?.variants || [];
    const [productImages, setProductImages] = useState([])


    const handleSelectVariantValue = (groupLabel, value) => {
        setSelectedVariantValues((prev) => {
            const index = prev.findIndex((item) => item.label === groupLabel);

            // If label exists
            if (index !== -1) {
                const group = prev[index];
                const values = group.values.includes(value)
                    ? group.values.filter((v) => v !== value) // deselect
                    : [...group.values, value]; // select

                const updated = [...prev];
                updated[index] = { label: groupLabel, values };

                // If empty after deselect, remove the group entirely
                return values.length > 0
                    ? updated
                    : prev.filter((_, i) => i !== index);
            }

            // If group doesn't exist yet
            return [...prev, { label: groupLabel, values: [value] }];
        });
    };

    const handleImageChange = (files) => {
        console.log("Uploaded files:", files);
        setProductImages(files)
    };

    return (
        <div>
            <div className="grid grid-cols-12 gap-3">
                {/* Left */}
                <Card className={'col-span-12 lg:col-span-4 h-fit'}>
                    <CardContent>
                         <h5 className="text-lg mb-3">Product Image </h5>
                        <div className="flex flex-col gap-3 rounded-xl ">
                            {productImages?.length > 0 && <ImageGallery images={productImages} />}
                            <ImageUploader multiple maxSize={5} onChange={handleImageChange} />
                        </div>
                    </CardContent>
                </Card>

                {/* Right */}
                <Card className={'col-span-12 lg:col-span-8 h-fit'}>
                    <CardContent>
                        <h5 className="text-lg">General Information</h5>
                        <div className="grid grid-cols-12 gap-4 mt-3">
                            {generalInformation?.map((curr, idx) => {
                                return (
                                    <div key={idx} className={`${curr.size} flex flex-col gap-2  `}>
                                        <Label htmlFor={curr.name}>
                                            {curr.label}
                                        </Label>
                                        {// Select
                                            curr.type === "select" ?
                                                <GroupedSelect
                                                    groupedOptions={curr.options}
                                                    handleSelectChange={(item) => setSelectedCategory(item)}
                                                /> :
                                                // Input
                                                <Input
                                                    name={curr.name}
                                                    type={curr.type}
                                                    as={curr.type}
                                                    rows={10}
                                                />
                                        }
                                    </div>
                                )
                            })}

                            {/* Variants */}
                            {categoryVariants?.length > 0 &&
                                categoryVariants.map((curr, idx) => {
                                    const selectedGroup = selectedVariantValues.find(
                                        (v) => v.label === curr.label
                                    );
                                    const selectedValues = selectedGroup?.values || [];

                                    return (
                                        <div key={idx} className="mb-4 col-span-12">
                                            <p className="font-semibold text-sm mb-2">{curr.label}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {curr.variant.map((opt, optIdx) => {
                                                    const isSelected = selectedValues.includes(opt.name);
                                                    return (
                                                        <div
                                                            key={optIdx}
                                                            onClick={() => handleSelectVariantValue(curr.label, opt.name)}
                                                            className={`relative px-3 py-2 text-sm rounded-lg border cursor-pointer transition duration-75 flex items-center justify-center min-w-[100px] text-center ${isSelected
                                                                ? "bg-primary text-white"
                                                                : "bg-[#f3f3f3] hover:bg-[#eeeeee] dark:bg-input/30 dark:hover:bg-input/55"
                                                                }`}>
                                                            {opt.name}

                                                        </div>
                                                    );
                                                })}

                                            </div>
                                        </div>
                                    );
                                })}

                        </div>
                    </CardContent>
                </Card>
            </div>


        </div>
    )
}