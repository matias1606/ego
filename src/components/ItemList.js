import React,{useState,useEffect} from "react"
import Item from "./Item"
const categorias = [{nombre:"Todos",id:0},{nombre:"Autos",id:1},{nombre:"Pickups y Comerciales",id:2},{nombre:"Suvs y Crossovers",id:3}]
const ItemList = ({items}) => {
    return(
        <>
        <div className="container autos">
            <div className="row">
            {items.map((item)=>{
                return (
                    <Item id={item.id} category={item.categoria} modelo={item.modelo} pictureUrl={item.pictureUrl} price={item.price} textPrice={item.textPrice} title={item.title} />
                 )
            })}
            </div>
        </div>
        </>
    )
}

export default ItemList