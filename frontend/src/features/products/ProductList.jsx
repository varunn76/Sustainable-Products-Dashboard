import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "../../components/Loader";
import DeleteModal from "../../components/DeleteModal";
import AddProductForm from "../../components/AddProductForm";
import toast, { Toaster } from "react-hot-toast";
import { useDeleteProductMutation } from "../../services/productsApi";
import { CrossIcon } from "../../icons";

const ProductList = ({
  filteredProducts,
  refetchData,
  page,
  setPage,
  totalPages,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [deleteProduct] = useDeleteProductMutation();

  if (!filteredProducts) return <Loader />;
  if (filteredProducts.length === 0)
    return <p className="text-gray-700 text-center">No products found.</p>;

  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
  };

  const handleDelete = async () => {
    if (!selectedProduct) return;
    try {
      await deleteProduct(selectedProduct._id).unwrap();
      toast.success(`${selectedProduct.title} deleted successfully`);
      setModalOpen(false);
      setSelectedProduct(null);
      if (refetchData) refetchData();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete product");
    }
  };

  return (
    <div className=" md:p-6 h-full">
      <Toaster position="top-right" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onDelete={() => openDeleteModal(product)}
            onEdit={() => openEditModal(product)}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>

          <span className="text-gray-700">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}

      {modalOpen && (
        <DeleteModal
          selectedProduct={selectedProduct}
          setModalOpen={setModalOpen}
          handleDelete={handleDelete}
        />
      )}

      {editModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setEditModalOpen(false)}
              className="absolute top-2 right-2 rounded-full p-2 text-white hover:text-gray-700"
            >
              <CrossIcon size="1.5rem" />
            </button>
            <h3 className="text-xl font-bold mb-4">Update Product</h3>
            <AddProductForm
              onClose={() => setEditModalOpen(false)}
              initialData={selectedProduct}
              onSuccess={() => {
                if (refetchData) refetchData();
                setEditModalOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
