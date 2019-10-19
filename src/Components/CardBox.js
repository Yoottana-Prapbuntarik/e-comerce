import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class CardBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            over: false
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.onExit = this.onExit.bind(this);
    }

    handleMouseEnter = () => {
        this.setState({
            over: true
        });
    }
    onExit = () => {
        this.setState({
            over: false
        })
    }
    render() {
        console.log(this.state.over)
        return (
            <React.Fragment>
                <div className="col-lg-3">
                    <div className="container MarginTopClass">
                        <div className="cardCutoms text-center">
                            <div className="embed-responsive embed-responsive-16by9">
                                <NavLink className="wrapper-card-img " to={`/ProductDetail/`} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.onExit}>
                                    <img alt={this.props.altText} className="card-img-top  embed-responsive-item" src={this.props.img}
                                        width="300px" >
                                    </img>
                                </NavLink>

                                {this.state.over &&
                                    (<div className="showItem">
                                        10 ชิ้น
                                        </div>
                                    )
                                }
                            </div>
                            <div className="card-block mt-5 ">
                                <h4 className="card-title">Midi Off Shoulder Ruched Dress</h4>
                                <p className="card-text pb-3"><u>1,280 บาท</u> 900 บาท</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default CardBox
