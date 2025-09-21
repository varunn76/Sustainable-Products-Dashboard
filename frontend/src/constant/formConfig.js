const formConfig = [
  {
    label: "Name",
    name: "title",
    type: "text",
    placeholder: "Enter product name",
    required: true,
  },
  {
    label: "Category",
    name: "category",
    type: "select",
    placeholder: "Select  Category",
    required: true,
    options: [
      { value: "Kitchen", label: "Kitchen" },
      { value: "Electronics", label: "Electronics" },
      { value: "Clothing", label: "Clothing" },
      { value: "Accessories", label: "Accessories" },
      { value: "Stationery", label: "Stationery" },
      { value: "Fitness", label: "Fitness" },
      { value: "Home", label: "Home" },
      { value: "Food", label: "Food" },
      { value: "Personal Care", label: "Personal Care" },
    ],
  },

  {
    label: "Description",
    name: "description",
    type: "textarea",
    placeholder: "Enter product description",
    required: true,
    rows: 4,
  },
  {
    label: "Score",
    name: "score",
    type: "number",
    placeholder: "Enter product sustainability score",
    required: true,
    min: 0,
    max: 100,
  },
];
export default formConfig;
