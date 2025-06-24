
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
        label: "Size",
        name: "sizes",
        type: "select_box",
        size: "col-span-12 lg:col-span-6 xl:col-span-4",
        options: ['XS', 'S', 'M', 'L', 'XL']

    },
    {
        label: "Gender",
        name: "gender",
        type: "radio",
        size: "col-span-12 lg:col-span-6 xl:col-span-4",
        options: [{ label: "Male", value: 1 }, { label: "Female", value: 2 }, { label: "Unisex", value: 3 }]
    },
    {
        label: "Category",
        name: "category",
        type: "select",
        size: "col-span-12 lg:col-span-6 xl:col-span-4",
        options: [
            {
                label: "Electronics",
                options: [
                    { label: "Mobile", value: "mobile" },
                    { label: "Laptop", value: "laptop" },
                ],
            },
            {
                label: "Clothing",
                options: [
                    { label: "T-Shirts", value: "t-shirts" },
                    { label: "Shirts", value: "shirts" },
                    { label: "Tops", value: "tops" },
                    { label: "Pants", value: "pants" },
                ],
            },
        ]

    }
]

export const pricingStocksDetails = [
    { label: "Base Pricing", name: "base_price", type: "text", size: "col-span-12 lg:col-span-6" },
    { label: "Stock", name: "stock", type: "number", size: "col-span-12 lg:col-span-6" },
    { label: "Discount", name: "discount_value", type: "number", size: "col-span-12 lg:col-span-6" },
    { label: "Discount Type", name: "discount_type", type: "select", size: "col-span-12 lg:col-span-6" },
]