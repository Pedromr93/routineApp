import React, {useState, useEffect} from 'react';
import '../assets/styles/app.scss'
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {

    const [ videos, setVideos ] = useState([]);
    const API = 'http://localhost:3000/initialState';

    useEffect( () => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));  
    }, []);

    console.log(videos)

    return (
        <div className= "App">
            <Header />
            <Search />
            <Categories title='Mi lista'>
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Categories title='Tendencias' >
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Categories title='Originales de platzi video'>
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
};

export default App;