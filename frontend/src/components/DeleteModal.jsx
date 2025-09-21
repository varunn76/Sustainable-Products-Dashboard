const DeleteModal = ({ selectedProduct, setModalOpen, handleDelete }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
        <h3 className="text-xl font-bold mb-4">Confirm Delete</h3>
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete {" "}
          <strong>{selectedProduct.title}</strong>?
        </p>
        <div className="flex justify-around">
          <button
            onClick={() => setModalOpen(false)}
            className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-300 hover:text-black/50"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
