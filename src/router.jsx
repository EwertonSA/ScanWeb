import {createBrowserRouter} from "react-router-dom"
import RootLayout from "./Components/RootLayout"
import CreateItem from "./Components/CreateItem"
import Home from "./Components/Home"
import ProductsLayout from "./Components/Layout"
const router= createBrowserRouter([{path:"/",element:<RootLayout/>,children:[{index:true,element:<Home/>}]},{path:"new",element:<ProductsLayout/>,children:[{index:true,element:<CreateItem/>}]}])
export default router