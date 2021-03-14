import React from 'react'
import {NavLink,Link} from 'react-router-dom'
const categorias = [{nombre:"Todos",id:0},{nombre:"Autos",id:1},{nombre:"Pickups y Comerciales",id:2},{nombre:"Suvs y Crossovers",id:3}]
const Modelos = () => {
    return (
        <div className="container container-modelos">
            <div className="row">
                <div className="col-12">
                    <h2> Descubrí todos los modelos</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="dropdown">
                                <h6 className="btn dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filtrar  por</h6>   
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {categorias.map((categoria) => (
                                        <NavLink className="dropdown-item" to={`/categoria/${categoria.id}`}>{categoria.nombre}</NavLink>
                                    ))}
                                </div>
                        </div>
                        <div className="dropdown">
                                <h6 className="btn dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ordenar  por</h6>   
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item ordenar" href="#">Nada</a>
                                    <a className="dropdown-item ordenar" href="#">De <strong>menor</strong> a <strong>mayor</strong> precio</a>
                                    <a className="dropdown-item ordenar" href="#">De <strong>mayor</strong> a <strong>menor</strong> precio</a>
                                    <a className="dropdown-item ordenar" href="#">Más<strong> nuevos</strong> primero</a>
                                    <a className="dropdown-item ordenar ultimo" href="#">Más<strong> viejos</strong> primero</a>
                                </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Modelos
