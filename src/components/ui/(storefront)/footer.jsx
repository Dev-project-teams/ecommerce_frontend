import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Facebook,
    Twitter,
    Instagram,
} from "lucide-react";

const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { label: "Products", href: "/products" },
            { label: "Categories", href: "/categories" },
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Customer Service",
        links: [
            { label: "Help Center", href: "#" },
            { label: "Returns", href: "#" },
            { label: "Shipping Info", href: "#" },
            { label: "Track Order", href: "#" },
        ],
    },
];

const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
];

export default function StoreFrontFooter() {
    return (
        <footer className="bg-gray-900 dark:bg-background text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Logo and Social */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">MyShop</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Your trusted online shopping destination for quality products at great prices.
                        </p>
                        <div className="flex space-x-4">
                            {socialIcons.map(({ icon: Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                                >
                                    <Icon className="h-5 w-5 text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Sections */}
                    {footerLinks.map((section, i) => (
                        <div key={i}>
                            <h4 className="font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {section.links.map((link, idx) => (
                                    <li key={idx}>
                                        <Link href={link.href} className="hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold mb-4">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to get updates on new products and offers.
                        </p>
                        <form className="flex w-full max-w-sm space-x-2">
                            <Input
                                type="email"
                                placeholder="Your email"
                                className="bg-gray-800 text-white border-gray-700 focus:ring-blue-500"
                            />
                            <Button type="submit" className="bg-primary">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} YourStore. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
