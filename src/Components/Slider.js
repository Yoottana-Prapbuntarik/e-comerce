import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption,
    CarouselControl
} from 'reactstrap';
const items = [
    {
        src: 'https://images.unsplash.com/photo-1571198317078-76a4b545b2c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1373&q=80',
        altText: 'Banner go here',
        caption: 'Banner go here'
    },
    {
        src: 'https://images.unsplash.com/photo-1571642376444-52558bb8cee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1326&q=80',
        altText: 'Banner go here',
        caption: 'Banner go hereII'
    },
    {
        src: 'https://images.unsplash.com/photo-1571241419809-b49d176baeb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=1360&q=80',
        altText: 'Banner go here',
        caption: 'Banner go hereIII'
    }
];

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            date: { date: null },

        };
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
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
    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
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
                    <div className="backgroundText">
                    </div>
                    <CarouselCaption captionText={''} captionHeader={item.caption}>
                    </CarouselCaption>
                </CarouselItem>
            );
        });
        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <div className="d-none">
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </div>
            </Carousel>
        );
    }
}


export default Slider;