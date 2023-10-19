import { Link, Outlet, useLocation } from "react-router-dom";

export default function ProductsLayout(){
    const {pathName}=useLocation()
    return(
        <div>
            <Link to={"new"}>Product Add</Link>
            <header>
               <nav>
                <Link to={"new"}>add</Link>
                <Link to="/">Cancel</Link>
                </nav> 
            </header>
            <Outlet/>
        </div>
    )
}