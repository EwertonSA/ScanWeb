import { useNavigate } from "react-router-dom";
import UseStock from "./Hooks/UseStock";

export default function DeleteButton({productId}){
    const {deleteProduct}=UseStock()
    const navigate=useNavigate()
    const handleDelete=()=>{
        if(confirm("Are you want to delete this product?"))
        {deleteProduct(productId)
        navigate("/")}
    }
    return(
        <button onClick={handleDelete}>Mass Delete</button>
    )
}