import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { categories } from "../utils";

const CategoryChart = ({ products }) => {
  const chartData = useMemo(() => {
    if (!products) return [];
    return categories
      .filter((cat) => cat !== "All")
      .map((cat) => ({
        category: cat,
        count: products.filter((p) => p.category === cat).length,
      }));
  }, [products]);

  return (
    <div className="bg-white rounded shadow md:p-4 w-full">
      <h3 className="text-lg font-bold mb-3">Products by Category</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 20, left: -10, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="category"
            interval={0}
            tick={{ fontSize: 12 }}
            tickLine={false}
            angle={-30}
            textAnchor="end"
          />

          <YAxis
            allowDecimals={false}
            tick={{ fontSize: 12 }}
          />

          <Tooltip wrapperStyle={{ fontSize: "12px" }} />
          <Bar dataKey="count" fill="#4CAF50" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;
