
export const generalInformation = [
    {
        label: "Product Name",
        name: "product_name",
        type: "text",
        size: "col-span-12"
    },
    {
        label: "Description",
        name: "descriptions",
        type: "textarea",
        size: "col-span-12"
    },
    {
        label: "Base Price",
        name: "base_price",
        type: "number",
        size: "col-span-12 lg:col-span-6"
    },
    {
        label: "Category",
        name: "category",
        type: "select",
        size: "col-span-12 lg:col-span-6",
        options: [
            {
                label: "Electronics",
                options: [
                    {
                        label: "Mobile",
                        value: "mobile",
                        variants: [
                            {
                                label: "RAM/Storage",
                                variant: [
                                    { name: "6GB RAM / 128GB" },
                                    { name: "8GB RAM / 128GB" },
                                    { name: "12GB RAM / 256GB" },
                                ],
                            },
                            {
                                label: "Color",
                                variant: [
                                    { name: "Black" },
                                    { name: "Blue" },
                                    { name: "Silver" },
                                ],
                            },
                        ],
                    },
                    {
                        label: "Laptop",
                        value: "laptop",
                        variants: [
                            {
                                label: "Processor",
                                variant: [
                                    { name: "Intel i5" },
                                    { name: "Intel i7" },
                                    { name: "AMD Ryzen 7" },
                                ],
                            },
                            {
                                label: "RAM",
                                variant: [
                                    { name: "8GB" },
                                    { name: "16GB" },
                                    { name: "32GB" },
                                ],
                            },
                            {
                                label: "Storage",
                                variant: [
                                    { name: "256GB SSD" },
                                    { name: "512GB SSD" },
                                    { name: "1TB SSD" },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                label: "Clothing",
                options: [
                    {
                        label: "T-Shirts",
                        value: "t-shirts",
                        variants: [
                            {
                                label: "Size",
                                variant: [
                                    { name: "S" },
                                    { name: "M" },
                                    { name: "L" },
                                    { name: "XL" },
                                ],
                            },
                            {
                                label: "Color",
                                variant: [
                                    { name: "Black" },
                                    { name: "White" },
                                    { name: "Red" },
                                    { name: "Green" },
                                ],
                            },
                        ],
                    },
                    {
                        label: "Shirts",
                        value: "shirts",
                        variants: [
                            {
                                label: "Size",
                                variant: [
                                    { name: "M" },
                                    { name: "L" },
                                    { name: "XL" },
                                ],
                            },
                            {
                                label: "Sleeve",
                                variant: [
                                    { name: "Full Sleeve" },
                                    { name: "Half Sleeve" },
                                ],
                            },
                        ],
                    },
                    {
                        label: "Tops",
                        value: "tops",
                        variants: [
                            {
                                label: "Size",
                                variant: [
                                    { name: "XS" },
                                    { name: "S" },
                                    { name: "M" },
                                    { name: "L" },
                                ],
                            },
                            {
                                label: "Pattern",
                                variant: [
                                    { name: "Floral" },
                                    { name: "Plain" },
                                    { name: "Striped" },
                                ],
                            },
                        ],
                    },
                    {
                        label: "Pants",
                        value: "pants",
                        variants: [
                            {
                                label: "Waist Size",
                                variant: [
                                    { name: "30" },
                                    { name: "32" },
                                    { name: "34" },
                                    { name: "36" },
                                ],
                            },
                            {
                                label: "Fit",
                                variant: [
                                    { name: "Slim Fit" },
                                    { name: "Regular Fit" },
                                    { name: "Loose Fit" },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    }
]

export const pricingStocksDetails = [
    { label: "Base Pricing", name: "base_price", type: "text", size: "col-span-12 lg:col-span-6" },
    { label: "Stock", name: "stock", type: "number", size: "col-span-12 lg:col-span-6" },
    { label: "Discount", name: "discount_value", type: "number", size: "col-span-12 lg:col-span-6" },
    { label: "Discount Type", name: "discount_type", type: "select", size: "col-span-12 lg:col-span-6" },
]