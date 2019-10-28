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
                    <img src="https://images.unsplash.com/photo-1494578379344-d6c710782a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
                <div className="text-banner col-12">
                    {this.props.text}
                </div>
                </div>

            </div >
        )
    }
}

export default Banner
