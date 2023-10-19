import React, { useContext } from "react";
import { StockContext } from "./StockContext";
function ProductCheckbox({ productId }) {
  const { selectProducts, select } = useContext(StockContext);

  const isSelected = selectProducts.includes(productId);

  const handleCheckboxChange = () => {
    select(productId);
  };

  return (
    <input
      type="checkbox"
      checked={isSelected}
      onChange={()=>handleCheckboxChange(productId)}
    />
  );
}

export default ProductCheckbox;
