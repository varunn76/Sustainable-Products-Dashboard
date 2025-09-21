import { useState } from "react";
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from "../../services/productsApi";
import toast, { Toaster } from "react-hot-toast";
import formConfig from "../../constant/formConfig";

const ProductForm = ({ onClose, initialData = null }) => {
  const isEdit = !!initialData;
  const initialFormData = formConfig.reduce((acc, field) => {
    acc[field.name] = initialData?.[field.name] || "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);
  const [addProduct, { isLoading: isAdding }] = useAddProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await updateProduct({ id: initialData._id, ...formData }).unwrap();
        toast.success("Product updated successfully!");
      } else {
        await addProduct(formData).unwrap();
        toast.success("Product added successfully!");
      }
      onClose();
    } catch (err) {
      toast.error("Operation failed!", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Toaster position="top-right" />
      {formConfig.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label className="font-medium mb-1">{field.label}</label>

          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              rows={field.rows || 3}
              required={field.required}
              className=" input resize-none"
            />
          ) : field.type === "select" ? (
            <select
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              className=" input "
            >
              <option value="" disabled>
                {field.placeholder}
              </option>
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              min={field.min}
              max={field.max}
              className="input"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={isAdding || isUpdating}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
      >
        {isAdding || isUpdating
          ? isEdit
            ? "Updating..."
            : "Adding..."
          : isEdit
          ? "Update Product"
          : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
