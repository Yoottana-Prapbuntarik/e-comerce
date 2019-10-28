import React, { Component } from 'react';
import Banner from '../Components/Banner';
class Product extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                        <Banner images={"https://images.unsplash.com/photo-1494578379344-d6c710782a3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"} text={"Product"}/>
                        </div>
                <div className="container-fluid MarginTopClass">
                    <div className="row">
                        <div className="col-12">
                            Product
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Product
