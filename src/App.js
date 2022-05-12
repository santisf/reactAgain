import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

const item= [

  {id:"1", title: "pancreas", description:"pancreas en buen estado", precio:5000, img:"",stock:3},
  {id:"2", title: "higado", description:"higado sano y joven", precio:8000, img:"",stock:4}

]

const getFetch = new Promise((resolve, reject)=>{
  setTimeout(()=>{resolve(item)}, 2000);
  
})
/*const [item, setItem]= useState([]);
const[bool, setBool]=useState(true)*/
    
   /*useEffect(()=>{
        getFetch
            .then(respuesta => setItem(respuesta))
            .catch((error)=>{console.log(error)})
            .finally(()=>{console.log("finalizado")})
    })*/

  /*  getFetch
            .then(respuesta => console.log(respuesta))
            .catch((error)=>{console.log(error)})
            .finally(()=>{console.log("finalizado")})*/

function App() {
  
  const [{item}, setItem]= useState([]);

    
    useEffect(()=>{
        getFetch
            .then(respuesta => setItem(respuesta))
            .catch((error)=>{console.log(error)})
            .finally(()=>{console.log("finalizado")})
    },[])
  
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer saludo={"Bienvenidos"}/>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          e comerce <code>menu </code> .
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
