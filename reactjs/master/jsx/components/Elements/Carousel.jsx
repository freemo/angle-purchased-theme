import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Carousel, CarouselItem } from 'react-bootstrap';

class BsCarousel extends React.Component {

    render() {
        return (
            <ContentWrapper>
                <Carousel>
                    <CarouselItem>
                        <img width={ 1920 } height={ 600 } alt="1920x600" src="//placekitten.com/1920/600" />
                        <div className="carousel-caption">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <img width={ 1920 } height={ 600 } alt="1920x600" src="//placekitten.com/1920/600" />
                        <div className="carousel-caption">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <img width={ 1920 } height={ 600 } alt="1920x600" src="//placekitten.com/1920/600" />
                        <div className="carousel-caption">
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </CarouselItem>
                </Carousel>
            </ContentWrapper>
            );
    }

}

export default BsCarousel;