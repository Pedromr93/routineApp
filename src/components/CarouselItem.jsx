import React from 'react';
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="code in a laptop"></img>
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src="./assets/icons/play-icon.png" alt="play button"></img>
                <img className="carousel-item__details--img" src="./assets/icons/plus-icon.png" alt="plus button"></img>
            </div>
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        </div>
    </div>
);

export default CarouselItem;