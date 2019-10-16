import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
const items = [
    {
        src: 'https://images.unsplash.com/photo-1571198317078-76a4b545b2c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1373&q=80',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'https://images.unsplash.com/photo-1571198317078-76a4b545b2c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1373&q=80',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'https://images.unsplash.com/photo-1571198317078-76a4b545b2c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1373&q=80',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }
    // Animation
    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }
    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {

        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem className="img-responsive"
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}>
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionHeader={item.caption}>
                    </CarouselCaption>
                </CarouselItem>
            );
        });
        return (
            <Carousel
                activeIndex={activeIndex}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
            </Carousel>
        );
    }
}


export default Slider;