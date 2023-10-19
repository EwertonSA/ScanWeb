import { Link, Outlet } from "react-router-dom";
import DeleteButton from "./DeleteProduct";
import UseStock from "./Hooks/UseStock";
export default function RootLayout(){
    const {product}=UseStock()
    return(
        <>
        
        <header>
            <Link to={"/"}>Product List</Link>
            <nav>
                <Link to={"/new"}>Add</Link>
               <DeleteButton productId={product.id}></DeleteButton>
            </nav>
        </header>
        <div>
            <Outlet/>
        </div>
        <footer>
            <h2>ScandWeb test assingment</h2>
        </footer>
        </>
    )
}