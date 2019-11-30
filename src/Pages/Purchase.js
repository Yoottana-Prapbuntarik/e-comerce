import React, { Component } from 'react';
import '../Assets/css/Purchase.css';
import { connect } from 'react-redux';
import HeaderPuchase from '../Components/HeaderPuchase';
import Member from './Member'

class Purchase extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Member>
                <div className="container-fluid ">
                    <div className="row">
                    <div className="col-md-12 mt-5 col-12">
                            <h3 className="font-weight-bold">รายการสั่งซื้อ</h3>          
                        </div>
                        <div className="col-md-12 mt-5 col-12">
                        <HeaderPuchase/>
                        </div>
                    </div>
                </div>
            </Member>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        allCost: state.allCost
    }
}


export default connect(mapStateToProps)(Purchase);
