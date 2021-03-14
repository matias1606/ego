import React from 'react'
const ItemDetail = ({item}) => {
    return (
        <div className="container detalle">
            <div className="row">
                <div className="auto-imagen col-xl-6 col-lg-6 col-md-12 col-sm-12">
                  <img  className="imagen-detalle" srcset src={process.env.PUBLIC_URL + `/img/${item.numero}-g.png`} alt="imagen del auto"/>
                </div>
                <div className="texto-imagen col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <h5>{item.modelo}</h5>
                    <h1>{item.title}</h1>
                    <p className="descripcion"> Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet. </p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
