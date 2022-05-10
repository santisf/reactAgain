import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  
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
