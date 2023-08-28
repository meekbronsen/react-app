import { useState, useEffect } from "react";

// If you have a max of two props we can declare the interface inline
function ProductList({ category }: { category: string }) {
  const [ products, setProducts ] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products", category );
    setProducts(["Clothing", "Household"]);
  }, [category]); // to prevent infinite loop we add an empty array.

  return <div>ProductList</div>;
}

export default ProductList;
