import React,{useState,useEffect} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import {firestore} from '../FireBaseConfig'
import {NavLink,Link} from 'react-router-dom'
const categorias = [{nombre:"Todos",id:0},{nombre:"Autos",id:1},{nombre:"Pickups y Comerciales",id:2},{nombre:"Suvs y Crossovers",id:3}]
const ItemListContainer = () => {
    const [items,setItems] = useState([])
    const {categoria} = useParams()
    useEffect(() => {
        const db = firestore;
        const collection = categoria != 0 ? db.collection("Autitos").where('categoria','==',Number(categoria)) : db.collection("Autitos")
        const query = collection.get()
        .then(({docs})=>{setItems(docs.map(doc=>({id:doc.id,...doc.data()})))})
        .catch(()=>{
          console.log("Algo salio mal!")
        })
      }, [categoria])
    return (
      <>
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
                                <div className="dropdown-menu categoria" aria-labelledby="dropdownMenuButton">
                                    {categorias.map((categoria) => (
                                        <NavLink className="dropdown-item" to={`/categoria/${categoria.id}`}>{categoria.nombre}</NavLink>
                                    ))}
                                </div>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            {categorias.map((categoria) => (
                                        <li className="nav-item">
                                        <NavLink className="nav-link" to={`/categoria/${categoria.id}`}>{categoria.nombre}</NavLink>
                                        </li>
                                    ))}

                            </ul>
                        </div>
                        <div className="dropdown">
                                <h6 className="btn dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ordenar  por</h6>   
                                <div className="dropdown-menu ordenar" aria-labelledby="dropdownMenuButton">
                                    <button type="button" className="dropdown-item" onClick={()=>{setItems([...items.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))])}}>Nada</button>
                                    <button type="button" className="dropdown-item" onClick={()=>{setItems([...items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))])}}>De <strong>menor</strong> a <strong>mayor</strong> precio</button>
                                    <button type="button" className="dropdown-item" onClick={()=>{setItems([...items.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))])}}>De <strong>mayor</strong> a <strong>menor</strong> precio</button>
                                    <button type="button" className="dropdown-item" onClick={()=>{setItems([...items.sort((a, b) => parseFloat(b.modelo) - parseFloat(a.modelo))])}}>Más<strong> nuevos</strong> primero</button>
                                    <button type="button" className="dropdown-item ultimo" onClick={()=>{setItems([...items.sort((a, b) => parseFloat(a.modelo) - parseFloat(b.modelo))])}}>Más<strong> viejos</strong> primero</button>
                                </div>
                        </div>
                    </nav>
                  </div>
              </div>
        </div>
        <ItemList items={items}></ItemList>
        </>
    )
}

export default ItemListContainer
