import React, { Component } from 'react';
import Slider from '../Components/Slider';
import Category from '../Components/CategoryBox';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Slider />
                <div className="container-fluid MarginTopClass">
                    <div className="row mx-auto">
                        <Category />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
