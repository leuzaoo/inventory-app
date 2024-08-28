"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetUsersQuery } from "@/state/api";
import Header from "@/app/(components)/Header";

const columns: GridColDef[] = [
  { field: "userId", headerName: "ID", width: 400 },
  { field: "name", headerName: "Nome", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
];

const UsersPage = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <div className="py-4">Carregando...</div>;
  }

  if (isError || !users) {
    return (
      <div className="text-xl text-center text-red-500 py-4">
        Falha ao buscar os produtos.
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Usuários" />
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
};

export default UsersPage;
