
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const categories = [
    { icon: "/images/category/cat1.png", label: "Gaming" },
    { icon: "/images/category/cat2.png", label: "Sport Equip" },
    { icon: "/images/category/cat3.png", label: "Kitchen" },
    { icon: "/images/category/cat4.png", label: "Robot Cleaner" },
    { icon: "/images/category/cat5.png", label: "Mobiles" },
    { icon: "/images/category/cat6.png", label: "Office" },
    { icon: "/images/category/cat7.png", label: "Cameras" },
    { icon: "/images/category/cat8.png", label: "Computers" },
    { icon: "/images/category/cat9.png", label: "Televisions" },
    { icon: "/images/category/cat10.png", label: "Audios" },
];

function CategoryCard({ icon, label }) {
    return (
        <div className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
                <Image src={icon} alt={label} width={40} height={40} />
            </div>
            <p className="text-sm font-medium text-center">{label}</p>
        </div>
    );
}

export default function CategoryScroller() {
    const previewCount = 8;

    return (
        <section className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold sm:text-2xl">Popular Categories</h2>

                <Sheet>
                    <SheetTrigger className="text-sm text-gray-700 hover:text-black underline">
                        View All
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-sm sm:max-w-md">
                        <SheetHeader>
                            <SheetTitle className="text-lg font-semibold">All Categories</SheetTitle>
                        </SheetHeader>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            {categories.map((cat, index) => (
                                <CategoryCard key={index} icon={cat.icon} label={cat.label} />
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                {categories.slice(0, previewCount).map((cat, index) => (
                    <CategoryCard key={index} icon={cat.icon} label={cat.label} />
                ))}
            </div>
        </section>
    );
}
