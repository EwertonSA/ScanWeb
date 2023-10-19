import { createContext, useState } from "react";

export const StockContext = createContext();

export function StockContextProvider({ children }) {
  const [selectProducts, setSelectProducts] = useState([]); // Inicialize com uma lista vazia

  const select = (productId) => {
    const isSelected = selectProducts.includes(productId);
    if (isSelected) {
      setSelectProducts(selectProducts.filter((p) => p.id !== productId));
    } else {
      setSelectProducts([...selectProducts, productId]);
    }
    
  };

  const [product, setProduct] = useState(() => {
    const storedProducts = localStorage.getItem("obc-react-stock");
    if (!storedProducts) return [];
    return JSON.parse(storedProducts);
  });

  const addProduct = (newProduct) => {
    setProduct((current) => {
      const updatedProducts = [newProduct, ...current];
      localStorage.setItem("obc-react-stock", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  const getProduct = (productId) => {
    return product.find((p) => p.id === +productId);
  };
  const deleteProduct = () => {
    setProduct((current) => {
      const updatedProducts = current.filter((p) => !selectProducts.includes(p.id));
      localStorage.setItem("obc-react-stock", JSON.stringify(updatedProducts));
      setSelectProducts([]); // Limpe a lista de produtos selecionados após a exclusão
      return updatedProducts;
    });
  };

  const stock = {
    product,
    deleteProduct,
    getProduct,
    addProduct,
    selectProducts,
    select, // Adicione o estado de seleção e a função de seleção ao contexto
  };

  return (
    <StockContext.Provider value={stock}>{children}</StockContext.Provider>
  );
}
