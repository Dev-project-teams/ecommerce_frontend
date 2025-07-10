
export const generalInformation = [
    {
        label: "Category Name",
        name: "category_name",
        type: "text",
        size: "col-span-12 lg:col-span-6"
    },
    {
        label: "Parent Category",
        name: "parent_category",
        type: "select",
        size: "col-span-12 lg:col-span-6",
        options: [
            {
                label: "Electronics",
                value: "electronics"
            },
            {
                label: "Clothing",
                value: "clothings"
            },
        ]

    },
    {
        label: "Description",
        name: "descriptions",
        type: "textarea",
        size: "col-span-12"
    },
]

