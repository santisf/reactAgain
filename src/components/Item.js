
/*const item= [

    {id:"1", title: "pancreas", description:"pancreas en buen estado", precio:5000, img:"",stock:3},
    {id:"2", title: "higadp", description:"higado sano y joven", price:8000, img:"",stock:4}

]

const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve(item)}, 3000);
    reject("error");
})*/

import { Button, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";


function Item({id=0,title=0,description=0,stock=0, img=0,price=0}){
    return(
        <Card key={id} className=" col-lg-4" style={{ width: '18rem'}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Card.Text>
                Stock: {stock} precio: {price}
                </Card.Text>
                <ItemCount/>
                <Button  variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Item;