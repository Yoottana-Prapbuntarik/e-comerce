import React, { Component } from 'react'

class NotFound extends Component {
    render() {
        const styleNotFoun = {
            margin: '25% auto',
            fontSize: '20px'
        }
        return (
            <div style={styleNotFoun} className="container">
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
