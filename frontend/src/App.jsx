import React from "react";
import Home from "./pages/Home";
import ProductList from "./features/products/ProductList";

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div class="absolute inset-0 -z-10 h-full w-full item-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_50%,#5bee33_100%)]"></div>
      <Home />
    </div>
  );
};

export default App;
