
"use client"
import { Card, CardContent } from "@/components/ui/card";
import { generalInformation } from "../utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CreateCategory() {
    const [variants, setVariants] = useState([
        { id: Date.now(), name: "", values: [""] },
    ]);

    const addVariant = () => {
        setVariants((prev) => [
            ...prev,
            { id: Date.now(), name: "", values: [""] },
        ]);
    };

    const removeVariant = (id) => {
        setVariants((prev) => prev.filter((variant) => variant.id !== id));
    };

    const handleVariantValueChange = (variantId, index, newValue) => {
        setVariants((prev) =>
            prev.map((variant) =>
                variant.id === variantId
                    ? {
                        ...variant,
                        values: variant.values.map((val, i) =>
                            i === index ? newValue : val
                        ),
                    }
                    : variant
            )
        );
    };

    const addValueToVariant = (variantId) => {
        setVariants((prev) =>
            prev.map((variant) =>
                variant.id === variantId
                    ? { ...variant, values: [...variant.values, ""] }
                    : variant
            )
        );
    };

    const removeValueFromVariant = (variantId, index) => {
        setVariants((prev) =>
            prev.map((variant) =>
                variant.id === variantId
                    ? {
                        ...variant,
                        values: variant.values.filter((_, i) => i !== index),
                    }
                    : variant
            )
        );
    };
    const handleChange = () => {

    };

    return (
        <div>
            <div className="grid grid-cols-12 gap-3">
                <Card className={'col-span-12 '}>
                    <CardContent>
                        <div className="grid grid-cols-12 gap-4 mt-3">
                            {generalInformation?.map((curr, idx) => {
                                return (
                                    <div key={idx} className={`${curr.size} flex flex-col gap-2  `}>
                                        <Label htmlFor={curr.name}>
                                            {curr.label}
                                        </Label>

                                        {curr.type === "select" ? (
                                            <Select onValueChange={(val) => handleChange(curr.name, val)}>
                                                <SelectTrigger className="min-w-[200px] w-full">
                                                    <SelectValue placeholder={`Select ${curr.label}`} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {curr.options?.map((option, idx) => (
                                                        <SelectItem key={idx} value={option.value}>
                                                            {option.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        ) : (
                                            <Input
                                                name={curr.name}
                                                type={curr.type}
                                                rows={5}
                                                as={curr.type}
                                                onChange={(e) => handleChange(curr.name, e.target.value)}
                                            />
                                        )}
                                    </div>
                                )
                            })}

                            {/* Dynamic Variant Fields */}
                            <div className="space-y-4 col-span-12 mt-3">
                                <Label className="text-md font-semibold">Variants</Label>
                                {variants.map((variant) => (
                                    <div key={variant.id} className="space-y-4 border p-4 rounded-md col-span-12 ">
                                        <div className="flex gap-2 items-end justify-between ">
                                            <div className="w-full flex flex-col gap-2">
                                                <Label>Variant Name</Label>
                                                <Input
                                                    value={variant.name}
                                                    onChange={(e) => {
                                                        console.log(e.value)
                                                    }}
                                                    placeholder="e.g., Size or Color"
                                                />
                                            </div>
                                            <Button
                                                variant="destructive"
                                                onClick={() => removeVariant(variant.id)}
                                                className=""
                                             >
                                                Remove Variant
                                            </Button>
                                        </div>

                                        <div className="space-y-3 flex flex-col ">
                                            <Label>Values</Label>
                                            {variant.values.map((value, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <Input
                                                        value={value}
                                                        onChange={(e) =>
                                                            handleVariantValueChange(variant.id, index, e.target.value)
                                                        }
                                                        placeholder="e.g., L or #fff"
                                                    />
                                                    <Button
                                                        variant="destructive"
                                                        size="sm"
                                                        onClick={() => removeValueFromVariant(variant.id, index)}
                                                    >
                                                        Remove
                                                    </Button>
                                                </div>
                                            ))}
                                            <Button size="sm" className={'border-dashed border-2'} variant={'outline'} onClick={() => addValueToVariant(variant.id)}>
                                                + Add Value
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                                <Button onClick={addVariant}>+ Add Variant</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}