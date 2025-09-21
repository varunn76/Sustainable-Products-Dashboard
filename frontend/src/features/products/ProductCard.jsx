import React from "react";
import { PencilIcon, TrashIcon } from "../../icons";

const ProductCard = ({ product, onDelete, onEdit }) => {
  return (
    <div className="relative card bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow group">
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">
          {product.title}
        </h3>
        <p className="text-sm font-semibold text-gray-500 group-hover:text-gray-900 mb-2">
          {product.category}
        </p>
        <p className="text-gray-600 mb-2 line-clamp-1">{product.description}</p>
      </div>

      <div className="flex items-center justify-between mt-2">
        <span
          className={`px-2 py-1 rounded ${
            product.score >= 75
              ? "bg-green-100 text-green-800"
              : product.score >= 50
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          Sustainability Score: {product.score}
        </span>

        <div className="absolute right-2 top-20 lg:top-2 flex flex-col lg:flex-row gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onEdit(product)}
            className="bg-primary p-1 rounded hover:bg-primary-dark text-white"
            title="Edit"
          >
            <PencilIcon />
          </button>

          <button
            onClick={() => onDelete(product)}
            className="bg-red-600 p-1 rounded hover:bg-red-700 text-white"
            title="Delete"
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
