import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import motor from './img/10-g.png'
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        dots:true,
        slidesToShow: 1,
        slidesToScroll:1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots:true,
        slidesToShow: 1,
        slidesToScroll:1,
      },
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    
  };
const Slick = () => {
    return (
        <>
        <div className="contenido-slick">
        <div className="slick-content grande">
        <Slider {...settings}>
          <div className="imagen">
            <img src="https://i.postimg.cc/4N44LpCH/1.jpg" alt=""/>
            <h3>Transmisión manual</h3>
            <p> Posibilidad de elección de caja automática de  manejo. </p>
          </div>
          <div className="imagen">
            <img src={process.env.PUBLIC_URL + `img/slick-img/1.jpg`} alt=""/>
            <h3>Nuevos Motores Toyota</h3>
            <p> Dos alternativas diesel con turbo de geometría variable, 1GD (2.8 L) y 2GD (2.4 L). </p>
          </div>
         <div className="imagen">
            <img src={process.env.PUBLIC_URL + `img/slick-img/3.png`} alt=""/>
            <h3>Suspensión mejorada</h3>
            <p> Mayor confort de marcha, estabilidad y capacidad Off Road. </p>
         </div>
         <div className="imagen">
            <img src={process.env.PUBLIC_URL + `img/slick-img/2.png`} alt=""/>
            <h3>Transmisión automática</h3>
            <p> Posibilidad de elección de caja automática de  manejo. </p>
         </div>
        </Slider>
      </div>
      <div className="slick-content chico">
          <Slider {...settings}>
          <div className="imagen">
            <img src="https://i.postimg.cc/4N44LpCH/1.jpg" alt=""/>
            <h3>Nuevos Motores Toyota</h3>
            <p> Dos alternativas diesel con turbo de geometría variable, 1GD (2.8 L) y 2GD (2.4 L). </p>
          </div>
          <div className="imagen">
            <img src={process.env.PUBLIC_URL + `img/slick-img/2.png`} alt=""/>
            <h3>Transmisión automática</h3>
            <p> Posibilidad de elección de caja automática de  manejo. </p>
          </div>
         <div className="imagen">
            <img src={process.env.PUBLIC_URL + `img/slick-img/3.png`} alt=""/>
            <h3>Suspensión mejorada</h3>
            <p> Mayor confort de marcha, estabilidad y capacidad Off Road. </p>
         </div>
         <div className="imagen">
            <img src={process.env.PUBLIC_URL + `img/slick-img/4.png`} alt=""/>
            <h3>Transmisión manual</h3>
            <p> Posibilidad de elección de caja automática de  manejo. </p>
         </div>
        </Slider>
      </div>
      </div>
      </>
    )
}

export default Slick
