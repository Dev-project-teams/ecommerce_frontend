export async function fetchCategory({
  page,
  perPage,
  search = '',
  searchRegex = false, // default to false like DataTables
  order = 'desc',
  orderByIndex = 0,
  columns = [
    { data: 'title', searchable: true, orderable: true },
    { data: 'created_at', searchable: false, orderable: true }
  ]
}) {
  const start = (page - 1) * perPage;
  const params = new URLSearchParams();

  params.set('length', perPage.toString());
  params.set('start', start.toString());

  // ✅ Use Yajra format
  params.set('search[value]', search);
  params.set('search[regex]', String(searchRegex));

  // ✅ Sorting by index
  params.set('order[0][column]', orderByIndex.toString());
  params.set('order[0][dir]', order);

  // ✅ Column definitions (as required by DataTables)
  columns.forEach((col, i) => {
    params.set(`columns[${i}][data]`, col.data);
    params.set(`columns[${i}][searchable]`, String(col.searchable));
    params.set(`columns[${i}][orderable]`, String(col.orderable));
    params.set(`columns[${i}][search][value]`, ''); // Required by Yajra
    params.set(`columns[${i}][search][regex]`, 'false'); // Optional
  });

  const res = await fetch(`https://hrpf.selvisoftware.in/api/webinar?${params}`);
  if (!res.ok) throw new Error('Failed to fetch');

  const json = await res.json();
  const original = json.data.original;

  return {
    products: original.data,
    total: original.recordsFiltered || original.recordsTotal
  };
}
