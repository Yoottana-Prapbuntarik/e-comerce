import React, { Component } from 'react'

class NotFound extends Component {
    render() {

        return (
            <div className="container MarginTopClassII">
                <div className="row">
                    <div className="col-12">
                        <div  className="text-center">
                            <h3>404 NOT FOUND !</h3>
                            <p className="text-danger my-5">Can't response your page request</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound;
