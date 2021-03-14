
import logo from './logo.svg';
import './App.css';
import Slick from './Slick'
import Header from './components/Header'
import Modelos from  './components/Modelos'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import Ficha from './components/Ficha';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Redirect to="/categoria/0"></Redirect>
        <Switch>
          <Route exact path="/categoria/:categoria">
            <ItemListContainer></ItemListContainer>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer></ItemDetailContainer>
          </Route>
          
          <Route exact path="/FichaModelo">
            <Ficha></Ficha>
          </Route>
        </Switch>
        <nav className="container-fluid footer">
          <a className="navbar-brand" href="#"></a>
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
