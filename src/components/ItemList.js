import { useState, useEffect } from "react";
import Item from "./Item.js";




const ItemList = ({productos}) => {
    let productosJSX=  productos.map((prod)=>(
        <Item
        id={prod.id} 
        title={prod.title} 
        description={prod.description}
        stock={prod.stock}
        img={prod.img}
        price={prod.price}/>
       
    ))
    return (
        <>
            
            {productosJSX}
        
        </>
    )
}

export default ItemList;