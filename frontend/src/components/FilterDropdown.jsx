import React from "react";

const FilterDropdown = ({ categories = [], selectedCategory, onChange }) => {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => onChange(e.target.value)}
      className="bg-gray-200 text-gray-800 px-3 py-2 rounded hover:bg-gray-300 transition-colors w-full "
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
