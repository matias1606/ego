import React from 'react'
import Slick from '../Slick'
const Ficha = () => {
    return (
        <>
        <div className="container">
            <div className="row ficha_modelo">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <img src={process.env.PUBLIC_URL + `/img/ficha_modelo.png`} alt=""/>
                </div>
                <div className="texto-ficha col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <h5>Hilux DX/SR</h5>
                    <h1>Preparada para cualquier desafío</h1>
                    <p>Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
        <Slick>
        </Slick>
        <div className="container auto-texto">
            <div className="row mb-4">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <h3>Título de 20 px</h3>
                        <p className="mt-4">
                        Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.  
                        </p>
                </div>
                <div className="col-xl-6 col-lg-3 col-md-12 col-sm-12">
                        <img src={process.env.PUBLIC_URL + `/img/slick-img/3.jpg`} alt=""/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-xl-6 col-lg-3 col-md-12 col-sm-12">
                        <img src={process.env.PUBLIC_URL + `/img/slick-img/fondo.jpg`} alt=""/>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 align-self-start">
                        <h3>Título de 20 px</h3>
                        <p className="mt-4">
                        Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.  
                        </p>
                </div>
                    
            </div>
        </div>
        </>
    )
}

export default Ficha
