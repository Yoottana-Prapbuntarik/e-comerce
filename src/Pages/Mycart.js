import React, { Component } from 'react';
import Cart from '../Components/Cart';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
class Mycart extends Component {
    render() {
        return (
            <div>
                <div className="container Mycart mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="header">
                                ตระกร้าของฉัน
                        </h1>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <Cart dataProduct={this.props.addedItems} AllPrice={this.props.allCost}/>
                </div>
                <hr width="58%" />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 py-3 col-12">
                            <NavLink to="/Product">เลือกซื้อสินค้าต่อ</NavLink>
                        </div>
                        <div className="col-md-2 py-3 col-12">
                            <a href="/">ล้างตะกร้า</a>
                        </div>
                        <div className="col-md-3  py-3 col-12">
                            <NavLink className="btn btn-secondary w-100" to={`/Address`}>ดำเนินการต่อ</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        allCost: state.allCost
    }
}
export default connect(mapStateToProps)(Mycart);