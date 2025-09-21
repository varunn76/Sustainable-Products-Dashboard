import React, { useState, useEffect } from "react";
import { CrossIcon, SearchIcon } from "../icons";

const SearchBar = ({ value, onChange, placeholder = "Search products..." }) => {
  const [input, setInput] = useState(value || "");

  useEffect(() => {
    if (value !== input) setInput(value);
  }, [value]);

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(input);
    }, 500);

    return () => clearTimeout(handler);
  }, [input, onChange]);

  const handleClear = () => {
    setInput("");
    onChange("");
  };

  return (
    <div className="flex items-center gap-2 bg-gray-200 rounded px-3 py-1 w-full md:w-1/3 max-w-md">
      <SearchIcon />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent outline-none flex-1 py-1 text-gray-800"
        aria-label="Search products"
      />
      {input && (
        <button
          onClick={handleClear}
          className="text-gray-200 hover:text-gray-700 rounded-full p-[6px]"
          aria-label="Clear search"
        >
          <CrossIcon />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
