import React from "react"
// import './header.css'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
//import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import Cookie from "universal-cookie";

function Header2() {

    const cookie = new Cookie();
    const email = cookie.get('email');
    const nombres = cookie.get('nombres');
    const apellidos = cookie.get('apellidos');

    return (
        <div className="contenedor">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <img src="logo.jpg" className="logo" alt="logo"></img>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <HomeIcon/>
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <TrendingDownIcon/>
                                <a className="nav-link " >Descuentos</a>
                            </li>
                            <li className="nav-item">
                                <LocalOfferIcon/>
                                <a className="nav-link " >Productos</a>
                            </li>
                            <li className="nav-item">
                                <PersonIcon/>
                                <a className="nav-link " >Contacto</a>
                            </li>
                            <Link to='/'>
                            <li className="nav-item">
                                <LogoutIcon/>
                                <a className="nav-link " >Cerrar sesion</a>
                            </li>                                
                            </Link>
                            <h2>
                                Bienvenido:
                                <p>{nombres}</p>
                                <p>{apellidos}</p>
                                <p>{email}</p>
                            </h2>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header2