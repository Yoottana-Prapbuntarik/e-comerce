import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption,
    CarouselControl
} from 'reactstrap';
class ProductSlide extends Component {
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
        const nextIndex = this.state.activeIndex === this.props.imgSource.img.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.imgSource.img.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    render() {
        const { activeIndex } = this.state;
        const slides = this.props.imgSource.img.map((item, i) => {
            return (
                <CarouselItem className="img-responsive"
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={i}>
                    <img src={item.source} alt={item.caption} />
                    <div className="backgroundText">
                    </div>
                    <CarouselCaption captionText={''} captionHeader={item.caption}>
                    </CarouselCaption>
                </CarouselItem>
            );
        });
        return (
            <div className="ProductSlider">
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >

                    <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <div className="d-none">
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </div>
                </Carousel>
            </div>
        );
    }
}


export default ProductSlide;