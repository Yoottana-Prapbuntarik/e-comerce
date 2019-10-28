import React, { Component } from 'react';
import Banner from '../Components/Banner';
class Promotion extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                        <Banner images={"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"} text={"Promotion"}/>
                        </div>
                <div className="container-fluid MarginTopClass">
                    <div className="row">
                        <div className="col-12">
                            Promotion
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Promotion
