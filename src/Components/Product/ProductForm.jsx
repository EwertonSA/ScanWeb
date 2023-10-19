import { useRef, useState } from "react";
import UseStock from "../Hooks/UseStock";
import StockProduct, { BookProduct, DvdProduct, FurnitureProduct, TYPE } from "../Entities/StockProduct";

export default function ProductForm({ itemToUpdate }) {
  const defaultProduct = {
    type: "",
    sku: "",
    price: 0,
    name: "",
    mb: 0, 
    height: 0,
    width: 0,
    length: 0,
    kg: 0,
  };

  const [product, setProduct] = useState(itemToUpdate ? itemToUpdate : defaultProduct);
  const { addProduct } = UseStock();
  const inputRef = useRef(null);

  const handleChange = (ev) => {
    setProduct({ ...product, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    try {
      let validProduct;
      switch (product.type) {
        case "Dvd":
          validProduct = new DvdProduct({ ...product, mb: product.mb });
          break;
        case "Furniture":
          validProduct = new FurnitureProduct({ ...product, height: product.height, width: product.width, length: product.length });
          break;
        case "Book":
          validProduct = new BookProduct({ ...product, kg: product.kg });
          break;
        default:
          validProduct = new StockProduct(product);
      }

      addProduct(validProduct);
      setProduct(defaultProduct);
    } catch (error) {
      console.log(error.message);
      alert("Something went wrong");
    } finally {
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div>
          <label htmlFor="sku">SKU</label>
          <input type="text" name="sku" id="sku" required value={product.sku} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required value={product.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" min={0.0} step={0.01} required value={product.price} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <select name="type" id="type" required value={product.type} onChange={handleChange}>
            <option disabled value="">
              Select a type...
            </option>
            {TYPE.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        {product.type === "Dvd" && (
          <div>
            <label htmlFor="mb">MB</label>
            <input
              type="number"
              name="mb"
              value={product.mb}
              onChange={handleChange}
            />
          </div>
        )}
        {product.type === "Furniture" && (
          <div>
            <label htmlFor="height">Height</label>
            <input
              type="number"
              name="height"
              value={product.height}
              onChange={handleChange}
            />
            <label htmlFor="width">Width</label>
            <input
              type="number"
              name="width"
              value={product.width}
              onChange={handleChange}
            />
            <label htmlFor="length">Length</label>
            <input
              type="number"
              name="length"
              value={product.length}
              onChange={handleChange}
            />
          </div>
        )}
        {product.type === "Book" && (
          <div>
            <label htmlFor="kg">Kg</label>
            <input
              type="number"
              name="kg"
              value={product.kg}
              onChange={handleChange}
            />
          </div>
        )}
        <button className="button is-primary is-large">Save</button>
      </div>
    </form>
  );
}
