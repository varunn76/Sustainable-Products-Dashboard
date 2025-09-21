import { useMemo } from "react";

const TopProducts = ({ products }) => {
  const topProducts = useMemo(() => {
    if (!products) return [];
    return [...products]
      .sort((a, b) => (b.score || 0) - (a.score || 0))
      .slice(0, 3);
  }, [products]);

  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-lg font-bold mb-3">Top 3 Sustainable Products</h3>
      <ul className="space-y-2">
        {topProducts.map((p, idx) => (
          <li key={p._id} className="flex items-center justify-between">
            <span>
              {idx + 1}. {p.title}
            </span>
            <span className="text-primary"> {p.score || "N/A"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopProducts;
