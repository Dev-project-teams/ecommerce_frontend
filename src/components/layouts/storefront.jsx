import StoreFrontHeader from "../ui/(storefront)/header";

export default function StorefrontLayout({ children }) {
    return (
        <div className="light">
            <div className="flex flex-col flex-1">
                <StoreFrontHeader />
                <main className="p-4">{children}</main>
            </div>
        </div>
        
    );
}