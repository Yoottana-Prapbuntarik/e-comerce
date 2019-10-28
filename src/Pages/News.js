import React, { Component } from 'react';
import Banner from '../Components/Banner';
class News extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                        <Banner images={"https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"} text={"News"} alt="image banner"/>
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
