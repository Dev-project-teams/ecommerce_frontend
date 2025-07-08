import ProductTable from "./table";

// Sample products
const products = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: (Math.random() * 1000).toFixed(2),
  image: `https://picsum.photos/seed/${i + 1}/80/80`,
}));

export default function ProductLists() {
  return (
    <ProductTable products={products} />
  );
}
