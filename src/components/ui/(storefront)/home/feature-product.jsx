import ProductCard from "../../product-card";

const products = [
    {
        id: '1',
        name: 'Premium Wireless Headphones with Active Noise Cancellation',
        price: 199,
        originalPrice: 249,
        image: 'https://readdy.ai/api/search-image?query=premium%20wireless%20headphones%20with%20active%20noise%20cancellation%2C%20sleek%20modern%20design%2C%20black%20and%20silver%20finish%2C%20minimalist%20white%20background%2C%20product%20photography%20style%2C%20professional%20lighting%2C%20high%20quality&width=400&height=400&seq=headphones1&orientation=squarish',
        rating: 4.8,
        reviews: 1247,
        isOnSale: true
    },
    {
        id: '2',
        name: 'Smart Fitness Watch with Heart Rate Monitor',
        price: 299,
        image: 'https://readdy.ai/api/search-image?query=smart%20fitness%20watch%20with%20heart%20rate%20monitor%2C%20sleek%20black%20sport%20band%2C%20digital%20display%20showing%20fitness%20metrics%2C%20clean%20white%20background%2C%20modern%20product%20photography%2C%20professional%20studio%20lighting&width=400&height=400&seq=watch1&orientation=squarish',
        rating: 4.6,
        reviews: 892
    },
    {
        id: '3',
        name: 'Ergonomic Office Chair with Lumbar Support',
        price: 399,
        originalPrice: 499,
        image: 'https://readdy.ai/api/search-image?query=ergonomic%20office%20chair%20with%20lumbar%20support%2C%20modern%20black%20mesh%20design%2C%20adjustable%20height%2C%20professional%20office%20furniture%2C%20clean%20white%20background%2C%20studio%20photography%20lighting&width=400&height=400&seq=chair1&orientation=squarish',
        rating: 4.7,
        reviews: 654,
        isOnSale: true
    },
    {
        id: '4',
        name: 'Ergonomic Office Chair with Lumbar Support',
        price: 399,
        originalPrice: 499,
        image: '/images/products/cpu-capinate.png',
        rating: 4.7,
        reviews: 654,
        isOnSale: true
    },
]

export default function FeatureProduct() {
    return (
        <section className="px-4 py-8 sm:px-6 lg:px-8">
            <div className="container">
                <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Products</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  h-full gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}