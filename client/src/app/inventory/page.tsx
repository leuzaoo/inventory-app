"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 120 },
  { field: "name", headerName: "Produto", width: 200 },
  {
    field: "price",
    headerName: "Preço",
    width: 110,
    type: "number",
    valueGetter: (value, row) => `R$${row.price}`,
  },
  {
    field: "rating",
    headerName: "Avaliação",
    width: 110,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Em estoque",
    width: 150,
    type: "number",
  },
];

const InventoryPage = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();
  console.log("products: ", products);

  if (isLoading) {
    return <div className="py-4">Carregando...</div>;
  }

  if (isError || !products) {
    return (
      <div className="text-xl text-center text-red-500 py-4">
        Falha ao buscar os produtos.
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Inventário" />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
};

export default InventoryPage;
