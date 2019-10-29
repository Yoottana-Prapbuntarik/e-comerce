import React, { Component } from 'react';
import Banner from '../Components/Banner';

class NotFound extends Component {
    render() {

        return (
            <React.Fragment>
                    <div className="container-fluid">
                        <Banner images={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQy-9LcVHb1SDMgdlcAzzP6rpLsuIQ_C981p23__t1AVMprT3gX"} alt="image banner"/>
                        </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div  className="text-center">
                            <h3>404 NOT FOUND !</h3>
                            <p className="text-danger my-5">Can't response your page request</p>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default NotFound;
