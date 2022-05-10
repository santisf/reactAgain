import ItemCount from "./ItemCount";
import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"
import "./ItemListContainer.css"


function ItemListContainer({saludo="falta escribir el saludo"}){
    return(
    <div className= "container-fluid itemListContainer">
        <Card className=" col-lg-4" style={{ width: '18rem'}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{saludo}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <ItemCount/>
                <Button  variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
    
  
        );
    
}

export default ItemListContainer;