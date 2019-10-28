import React, { Component } from 'react';
import Banner from '../Components/Banner';
class News extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                        <Banner text={"News"}/>
                        </div>
                <div className="container-fluid MarginTopClass">
                    <div className="row">
                        <div className="col-12">
                            News
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default News
