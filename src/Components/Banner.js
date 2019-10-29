import React, { Component } from 'react';
import '../Assets/css/Banner.css';
class Banner extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="row">
                <div className="Banner">
                    <img src={this.props.images} alt="banner"/>
                <div className="text-banner col-12">
                    {this.props.text}
                </div>
                </div>

            </div >
        )
    }
}

export default Banner
