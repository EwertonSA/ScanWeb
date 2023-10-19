import { RouterProvider } from "react-router-dom";
import router from "./router";
import { StockContextProvider } from "./Components/Context/StockContext";

export default function App(){
  return(
 <StockContextProvider> <RouterProvider router={router}></RouterProvider></StockContextProvider>
  )
}