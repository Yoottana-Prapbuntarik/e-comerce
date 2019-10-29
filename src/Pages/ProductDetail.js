import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentItems: []
        }
    }
    componentDidMount() {
        axios.get('http://www.mocky.io/v2/5db8705c3b00004f0b35f145').then(res => {
            this.setState({
                currentItems: res.data.items
            })
        })

    }
    render() {
        return (
            <div className="MarginTopClassII">
                {this.state.currentItems.map((data,i) => {
                    return (
                        parseInt(this.props.match.params.id) === data.id &&
                        <React.Fragment key={i}>
                            <div>{data.name}</div>
                            <div>{data.cost}</div>
                            {data.img.map((listImage,idx) =>{
                              return  <img src={listImage} alt="idx" key={idx} width="20%"/>
                            })}
                        </React.Fragment>
                    )
                })
                }

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataProduct: state.dataProduct
    }
}
export default connect(mapStateToProps)(ProductDetail);
