 import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Login from './components/Login'
import CreateFlight from './components/CreateFlight'




import CreateUser from './components/CreateUser'
import CreateQuotation from './components/CreateQuotation'
import Destination from './components/Destination';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ShowNorway from './components/destinations/ShowNorway';
import ShowFinland  from './components/destinations/ShowFinland';
import ResevarFecha from "./components/destinations/ResevarFecha";
import cotizacion from "./components//cotizacion";

function App() {
  
  return (
    <Router>
        <Navigation/>
          <div className="container p-4">
            <Route exact path={"/"} component={Destination} />
            <Route path={"/createQuo/:id"} component={CreateQuotation} />  
            <Route path={"/shownorway"} component={ShowNorway} />  
            <Route path={"/showfinland"} component={ShowFinland} />  
            <Route path={"/user"} component={CreateUser} />
            <Route path={"/login"} component={Login} />
            <Route path={"/ResevarFecha"} component={ResevarFecha}/>
            <Route path={"/cotizacion"} component={cotizacion}/>
             
        </div>
       
        <Footer/>
    </Router>
    
    );
  }


export default App;
 









