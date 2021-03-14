import React,{useState} from 'react'
import {NavLink} from "react-router-dom"
import logo from '../img/logo.svg';
import close from '../img/cerrar.png'
import hamburger from '../img/hamburguer.svg'
const secciones = [{nombre:"Novedades",id:"N"},{nombre:"Hombre",id:"H"},{nombre:"Mujer ",id:"M"},{nombre:"Contacto ",id:"C"}]


const NavBar = () => {
    const [tocado,setTocado] = useState(true) 
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="navbar-brand">
                    <NavLink onClick={()=>setTocado(true)} exact to="/categoria/0"><img src={logo} alt=""/></NavLink>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavLink id="modelo-1" exact to="/categoria/0" onClick={()=>{setTocado(true)
                            document.getElementById("modelo-1").classList.add("active")}} className={tocado?"nav-item active" : "nav-item"}>
                            <div className="nav-link">Modelos<span class="sr-only">(current)</span></div>
                        </NavLink>
                        <NavLink onClick={()=>{setTocado(false)}} className="nav-link" exact to="/FichaModelo" className={tocado?"nav-item" : "nav-item active"}>
                            <div className="nav-link" >Ficha de Modelo<span class="sr-only">(current)</span></div>
                        </NavLink>
                    </ul>
                </div>
                <div className="btn-group">
                    <h5 className="collapse navbar-collapse">Menú</h5>
                    <button _ngcontent-sgu-c1="" aria-expanded="true" aria-haspopup="true" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" type="button"><span className="logo"><img src={hamburger} alt=""/></span></button>
                    <div className="dropdown-menu">
                        <div className="cerrar">
                            <a href="javascript:;">Cerrar</a>
                            <img src={close} alt=""/>
                        </div>
                        <div className="box box-1">
                            <h6><NavLink to="/categoria/0" onClick={()=>{setTocado(true)}}>Modelos</NavLink></h6>
                            <h6><NavLink to="/FichaModelo"  onClick={()=>{setTocado(false)}}>Servicios y Accesorios</NavLink></h6>
                            <h6><NavLink to="/FichaModelo"  onClick={()=>{setTocado(false)}}>Financiación</NavLink> </h6>
                            <h6><NavLink to="/FichaModelo"  onClick={()=>{setTocado(false)}}>Reviews y Comunidad</NavLink></h6>
                        </div>
                        <div className="box box-2">
                            <h6><NavLink to="/FichaModelo"  onClick={()=>{setTocado(false)}}>Toyota Mobility Service</NavLink> </h6>
                            <h6><NavLink to="/FichaModelo"  onClick={()=>{setTocado(false)}}>Toyota Gazoo Racing</NavLink> </h6>
                            <h6><NavLink to="/FichaModelo"  onClick={()=>{setTocado(false)}}>Toyota Híbridos</NavLink> </h6>
                        </div>
                        <div className="box box-3">
                            <h6><NavLink to="/FichaModelo"  onClick={()=>{setTocado(false)}}>Concesionarios</NavLink></h6>
                            <h6><NavLink to="/FichaModelo"  onClick={()=>{setTocado(false)}}>Test Drive</NavLink></h6>
                            <h6><NavLink to="/FichaModelo"  onClick={()=>{setTocado(false)}}>Contacto</NavLink></h6>
                        </div>
                        <div className="box box-4">
                            <h6><NavLink to="/FichaModelo"  onClick={()=>{setTocado(false)}}>Actividades</NavLink></h6>
                            <h6><NavLink to="/FichaModelo"  onClick={()=>{setTocado(false)}}>Servicios al Cliente</NavLink></h6>
                            <h6><NavLink to="/FichaModelo"  onClick={()=>{setTocado(false)}}>Ventas Especiales</NavLink></h6>
                            <h6><NavLink to="/FichaModelo"  onClick={()=>{setTocado(false)}}>Innovación</NavLink></h6>
                            <h6><NavLink to="/FichaModelo"  onClick={()=>{setTocado(false)}}>Prensa</NavLink></h6>
                            <h6><NavLink to="/FichaModelo"  onClick={()=>{setTocado(false)}}>Acerca de...</NavLink></h6>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar