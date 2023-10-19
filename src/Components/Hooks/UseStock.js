import { useContext } from "react";
import { StockContext } from "../Context/StockContext";


export default function UseStock(){
    return(
        useContext(StockContext)
    )
}       