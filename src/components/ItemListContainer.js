import ItemCount from "./ItemCount";
import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"
import "./ItemListContainer.css"
import { useState, useEffect } from "react";
import ItemList from "./ItemList";



/*{item.map(item=>
    <Card key={item.id} className=" col-lg-4" style={{ width: '18rem'}}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
        {item.description}
        </Card.Text>
        <Card.Text>
        Stock: {item.stock} precio: {item.precio}
        </Card.Text>
        <ItemCount/>
        <Button  variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>
    )}*/
    const item= [

        {id:"1", title: "pancreas", description:"pancreas en buen estado", price:5000, img:"",stock:3},
        {id:"2", title: "higado", description:"higado sano y joven", price:8000, img:"",stock:4}
      
      ]

      const getFetch = () =>{
        return new Promise((resolve,reject) => {
    
            setTimeout(() => {
                resolve(item)
            }, 1500)
    
        })
    }
      
function ItemListContainer({saludo="falta escribir el saludo"}){

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])
    
   
    useEffect(() => {
       setLoading(true)

       

       getFetch().then ((resp)=>{
           setProductos(resp)
       })

       .catch ((error)=>{
        console.log(error)
    })

        .finally (()=>{
            setLoading(false)
    })
    }, [])


    return(
    <div className= "container-fluid itemListContainer">
       {
                loading
                    ? <h2>Cargando..</h2>
                    : <ItemList productos={productos}/>
            }
    </div>
    
  
        );
    
}

export default ItemListContainer;