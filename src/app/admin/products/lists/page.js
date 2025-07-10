import ProductTable from "./table";

async function getProducts(page, limit = 5, sortBy = "title", order = "asc", search = "") {
  const skip = (page - 1) * limit;

  const res = await fetch(
    `https://dummyjson.com/products?limit=100&skip=0`, // get all for search filtering
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();

  // Filter by search
  const filtered = data.products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];

    if (typeof valA === "string") {
      return order === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }

    return order === "asc" ? valA - valB : valB - valA;
  });

  // Paginate
  const paginated = sorted.slice(skip, skip + limit);

  return {
    products: paginated,
    total: filtered.length,
  };
}

export default async function ProductsPage({ searchParams }) {
  const page = Number(searchParams?.page || 1);
  const perPage = Number(searchParams?.perPage || 5);
  const sortBy = searchParams?.sortBy || "title";
  const order = searchParams?.order || "asc";
  const search = searchParams?.search || "";

  const data = await getProducts(page, perPage, sortBy, order, search);

  return (
    <ProductTable
      products={data.products}
      total={data.total}
      currentPage={page}
      perPage={perPage}
      sortBy={sortBy}
      order={order}
      search={search}
    />
  );
}
