import React from 'react';
import { mainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
    const items = mainCarouselData.map((item, index) => (
        <a key={index} href={item.path}>
            <img
                className='cursor-pointer w-full h-auto object-cover'
                role='presentation'
                src={item.image}
                alt={`Carousel item ${index + 1}`}
            />
        </a>
    ));

    return (
        <AliceCarousel
            items={items}
            autoPlay
            infinite
            mouseTracking
            disableButtonsControls
            disableDotsControls={false}
            autoPlayInterval={2500}
            animationDuration={1000}
            responsive={{
                0: { items: 1 },
                1024: { items: 1 }
            }}
        />
    );
};

export default MainCarousel;


