import React from 'react'
import {NavLink} from 'react-router-dom'
const Item = ({category,id,modelo,pictureUrl,price,textPrice,title}) => {
    return (
        <div className="card col-lg-3 col-md-4 col-sm-6">
            <div className="card-body">
                <h5 className="card-title nombre col-12">{title}</h5>
                <p className="card-text col-12 precio-anio">{modelo} | {textPrice}</p>
            </div>
            <div className="mx-auto">
                <NavLink activeClassName="active" to={`/item/${id}`}>
                    <img src={pictureUrl} alt={`carta de ${title}`} className="card-img-top"/>
                </NavLink>
            </div>
            <NavLink className="btn btn-dark" to={`/item/${id}`}>
                Ver Modelo
            </NavLink>
        </div>
        
    )
}

export default Item
