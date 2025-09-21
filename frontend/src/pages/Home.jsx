import React, { useState } from "react";
import ProductList from "../features/products/ProductList";
import AddProductForm from "../features/products/AddProductForm";
import { CrossIcon, PlusIcon } from "../icons";
import { useGetProductsQuery } from "../services/productsApi";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import ErrorPage from "../components/ErrorPage";
import { categories } from "../utils";
import CategoryChart from "../features/products/CategoryChart";
import TopProducts from "../features/products/TopProducts";
import FilterDropdown from "../components/FilterDropdown";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);
  const limit = 6;

  const { data, error, isLoading, refetch } = useGetProductsQuery({
    page,
    limit,
    search: searchTerm,
    category: selectedCategory === "All" ? "" : selectedCategory,
  });

  if (isLoading) return <Loader />;
  if (error)
    return <ErrorPage message="Failed to load products." retry={refetch} />;

  return (
    <div className="p-6">
      <div className="flex flex-col items-start md:items-center justify-between mb-6 gap-4 w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-left md:text-center w-full">
          Sustainable Products Dashboard
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center w-full">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />

          <div className="py-4 w-full sm:w-48">
            <FilterDropdown
              categories={categories}
              selectedCategory={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 transition-colors w-full sm:w-auto justify-center"
          >
            <PlusIcon className="w-5 h-5" />
            Add Product
          </button>
        </div>
      </div>

      <ProductList
        filteredProducts={data?.products || []}
        refetchData={refetch}
        page={page}
        setPage={setPage}
        totalPages={data?.totalPages || 1}
      />

      {data?.products.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <CategoryChart products={data?.products || []} />
          <TopProducts products={data?.products || []} />
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 rounded-full p-2 text-white hover:text-gray-700"
            >
              <CrossIcon size="1.5rem" />
            </button>
            <h3 className="text-xl font-bold mb-4">Add New Product</h3>
            <AddProductForm onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
