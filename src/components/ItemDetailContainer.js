import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {firestore} from "../FireBaseConfig"
const ItemDetailContainer = ()=>{
    let [item,setItem] = useState([])
    let {id} = useParams()
    useEffect(() => {
        const db = firestore;
        const collection = db.collection("Autitos").doc(id)
        const query = collection.get()
        .then((resultado)=>{
          setItem({...resultado.data()})})
        .catch(()=>{
          console.log("Algo salio mal!")
        })
      }, [])
    return (<>
            {<ItemDetail item={item}/>}
            </>)

}
export default ItemDetailContainer
