import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
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
        return (
            <React.Fragment>
                <div className="col-lg-3">
                    <div className="container MarginTopClass">
                        <div className="cardCutoms text-center">
                            <div className="embed-responsive embed-responsive-16by9">
                                <NavLink className="wrapper-card-img " to={`/ProductDetail/${this.props.id}`} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.onExit}>
                                    <img alt={this.props.altText} className="card-img-top  img-custome" src={this.props.img}
                                         >
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
                                <h4 className="card-title">{this.props.name}</h4>
                                <p className="card-text pb-3"><s>1,280 บาท</s> {this.props.cost} บาท</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}
const mapStateToProps = (state) =>{
    return{
        itemsSearch:state.itemsSearch
    }
}
export default connect(mapStateToProps)(CardBox);
