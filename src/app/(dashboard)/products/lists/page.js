import ProductTable from "./table";

async function getProducts(page, limit = 5) {
  const skip = (page - 1) * limit;
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}&data=1`,
    { next: { revalidate: 60 }, }
  );

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ProductsPage({ searchParams }) {
  const page = Number(searchParams?.page || 1);
  const perPage = Number(searchParams?.perPage || 5);
  const data = await getProducts(page, perPage);


  return (
    <ProductTable
      products={data.products}
      total={data.total}
      currentPage={page}
      perPage={perPage}
    />
  );
}
