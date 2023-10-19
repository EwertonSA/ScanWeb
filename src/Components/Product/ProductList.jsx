import ProductCheckbox from "../Context/checkbox";
import UseStock from "../Hooks/UseStock";

export default function ProductList(){
    const { product, selectProducts, select}=UseStock()
    
   
    return(
        <div>
       
       
            {Array.isArray(product) ? (
  product.map((prod) => (
    <div key={prod.id}>
    <ProductCheckbox productId={prod.id}/>
        
     <div><span>{prod.id}</span></div>
     <div><span>{prod.sku}</span></div>
     <div><span>{prod.name}</span></div>
     <div><span>{prod.price}</span></div>
    
     {prod.type === "Dvd" && (
        <div><span>Size: {prod.mb} MB</span></div>
      )}
      
      {prod.type === "Furniture" && (
        <div>
          <span>Dimension: {prod.height}</span>
          <span>x{prod.width}</span>
          <span>x{prod.length}</span>
        </div>
      )}
      
      {prod.type === "Book" && (
        <div><span>Weight: {prod.kg} Kg</span></div>
      )}
    </div>
  ))
) : (
  <p>No products available.</p>
)}

        
 </div>       )
}