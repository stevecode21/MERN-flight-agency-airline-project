import React, { Component } from 'react';
import {Link} from 'react-router-dom'



class Navigation extends Component {
    onClick=(e)=>{
        window.localStorage.clear();
        window.location.assign("/");
    }
    render() {
        console.log("loggedUser");
        let loggedUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(loggedUser);



        const isAuthenticated = (loggedUser);
        console.log("isAuthenticated");
        console.log(isAuthenticated);
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <a className="nav-link text-white font-weight-normal"   href={'http://facebook.com'}  >
                        <i className="fab fa-facebook-f iconos" style={{fontSize:"1.3rem"}}></i>
                </a>
                <a className="nav-link text-white font-weight-normal"   href={'http://youtube.com'}  >
                        
                        <i className="fab fa-youtube iconos" style={{fontSize:"1.3rem"}}></i>
                </a>
                <a className="nav-link text-white font-weight-normal"   href={'http://youtube.com'}  >
                        
                        <i className="fab fa-twitter iconos" style={{fontSize:"1.3rem"}}></i>
                </a> 
            <li className="nav-item">
                
                <Link className="nav-link text-white font-weight-normal menuhover" to="/login" >
                    Iniciar Sesíon
                </Link>
            </li>
            <li className="nav-item">
                
                <Link className="nav-link text-white font-weight-normal menuhover" to="/user">
                    Regístrese
                </Link>
            </li>
            <li className="nav-item">
                

            </li>
           
        </ul>
        );
        return (
        <nav className="navbar navbar-expand-lg  colornav" >
           
            <div className="container">
                <Link className="navbar-brand text-dark" to="/">
                    <img className="logoPrincipal" src="/logo.png" alt="logoPrincipal" />
                </Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto" >
                        <li className="nav-item active" >
                            
                            <Link className="nav-link  font-weight-normal text-white menuhover"    to="/">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            
                            <Link className="nav-link  font-weight-normal menuhover text-white" to="/createQuo">
                                Quiénes somos
                            </Link>
                        </li>
                        <li className="nav-item">
                            
                            <Link className="nav-link  font-weight-normal text-white menuhover"    to="/user">
                                Vuelos
                            </Link>
                        </li>
                        <li className="nav-item">
                            
                            <Link className="nav-link  font-weight-normal text-white menuhover"    to="/user">
                                Hoteles
                            </Link>
                        </li>
                        <li className="nav-item">
                            
                            <Link className="nav-link  font-weight-normal text-white menuhover"    to="/user">
                                Paquetes
                            
                            </Link>
                        </li>
                       
                    </ul>
                    {isAuthenticated ? (
            <ul class="navbar-nav ml-auto">
                
            <li class="nav-item">
                
                <Link className="nav-link text-white font-weight-normal" to="/">
                    Hi  {loggedUser.name}
                </Link>
            </li>
          
            <li class="nav-item">
                
                <Link className="nav-link text-white font-weight-normal" to="/">
                    Miles : {loggedUser.miles}
                </Link>
            </li>
            <li class="nav-item">
                
                <Link className="nav-link text-white font-weight-normal" to="/" onClick={this.onClick}>
                    Logout
                </Link>
            </li>

           
        </ul>

        ) : guestLinks}
                </div>
            </div>
         </nav>
        );
    }
}

export default Navigation;