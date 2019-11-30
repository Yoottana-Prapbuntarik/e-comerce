import React, { Component } from 'react';
import Cart from '../Components/Cart';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/fontawesome-free-solid';
class Mycart extends Component {
    render() {
        return (
            <div>
                <div className="container  mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="header">
                                ตระกร้าของฉัน
                        </h1>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <Cart dataProduct={this.props.addedItems} AllPrice={this.props.allCost} DeleteProduct={this.DeleteItem}/>
                </div>
                <div className="container mt-5">
                    <div className="row colorButtonMyCart">
                        <div className="col-md-6 py-3 col-12">
                            <NavLink to="/Product">
                                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>&nbsp; &nbsp; &nbsp;
                            &nbsp; เลือกซื้อสินค้าต่อ</NavLink>
                        </div>
                        <div className="col-md-3 py-3 col-12 colorButtonMyCart">
                            <a href="/">ล้างตะกร้า</a>
                        </div>
                        <div className="col-md-3  py-3 col-12 colorButtonMyCart ">
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