import React, { Component } from 'react';
import Banner from '../Components/Banner';
class Product extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                        <Banner text={"Product"}/>
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
