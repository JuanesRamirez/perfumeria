import React from "react"
import './header.css'
import LoginIcon from '@mui/icons-material/Login';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HomeIcon from '@mui/icons-material/Home';
import LinkIcon from '@mui/icons-material/Link';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Header() {
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
                                <OndemandVideoIcon/>
                                <a className="nav-link" href="#">Tutoriales</a>
                            </li>
                            <li className="nav-item">
                                <LinkIcon/>
                                <a className="nav-link " >Referencias</a>
                            </li>
                            <li className="nav-item">
                                <InventoryIcon/>
                                <a className="nav-link " >Recursos</a>
                            </li>
                            <li className="nav-item">
                                <PersonIcon/>
                                <a className="nav-link " >Contacto</a>
                            </li>
                            <li className="nav-item">
                                <PersonAddIcon/>
                                <a className="nav-link " >Registrarse</a>
                            </li>
                            <li className="nav-item">
                                <LoginIcon/>
                                <a className="nav-link " >Iniciar Sesion</a>
                            </li>
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

export default Header