export const categories = [
  "All",
  "Personal Care",
  "Home",
  "Clothing",
  "Electronics",
  "Accessories",
  "Stationery",
  "Kitchen",
  "Fitness",
  "Food",
];

export const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api/" : "/api/";
