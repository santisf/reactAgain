import React, { useEffect, useState } from "react";
import "./ItemCount.css"
function ItemCount(){

  const [count, setCount] = useState(0)
  function contador(){
    setCount(count +1);
  }
  function contadorN(){
    if(count < 0){

    }
    setCount(count - 1);
  }
    return(
        <div className= "botones">
                <button onClick= {contador} className= "buttonCont btn-primary">+</button>
                <p className= "pButtonCount">{count}</p>
                <button onClick= {contadorN} className= "buttonCont btn-primary neg disabled">-</button>

        </div>

    )

}

export default ItemCount