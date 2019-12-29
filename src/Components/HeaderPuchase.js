import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class HeaderPuchase extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="HeaderPuchase">
                <div className="container bg-alphaGray">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-6 pt-4">
                            เลขคำสั่งสซื้อ
                            </div>
                        <div className="col-lg-2 col-md-4 col-6 pt-4">
                            วันที่สั่งซื้อ
                            </div>
                        <div className="col-lg-2 col-md-4 col-6 pt-4">
                            ยอดสั่งซื้อ
                            </div>
                        <div className="col-lg-2 col-md-4 col-6 pt-4">
                            สถานะ
                            </div>
                        <div className="col-lg-2 col-md-4 col-6 pt-4">
                            Track
                            </div>
                    </div>
                </div>
                <div className="container pt-5">
                    <div className="row text-dark">
                        <div className="col-lg-2 col-md-4 col-6 pt-4">
                            #20190922001
                            </div>
                        <div className="col-lg-2 col-md-4 col-6 pt-4">
                            22/09/2019
                            </div>
                        <div className="col-lg-2 col-md-4 col-6 pt-4">
                            ยอดสั่งซื้อ
                            </div>
                        <div className="col-lg-2 col-md-4 col-6 pt-4">
                            <h5 className="font-weight-bold "><span className="status"><b className="text-status">กำลังจัดส่ง</b></span></h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 pt-4">
                            Track
                            </div>
                        <div className=" col-lg-2 col-md-4 col-6 pt-4">
                            <NavLink className="text-pink" to="/PurchaseLog">
                                ดูคำสั่งซื้อ
                            </NavLink>
                        </div>
                    </div>
                    <div className="row text-dark">
                        <div className="col-lg-2 col-md-4 col-6 pt-4">
                            #20190922001
                            </div>
                        <div className="col-lg-2 col-md-4 col-6 pt-4">
                            22/09/2019
                            </div>
                        <div className="col-lg-2 col-md-4 col-6 pt-4">
                            ยอดสั่งซื้อ
                            </div>
                        <div className="col-lg-2 col-md-4 col-6 pt-4">
                            <h5 className="font-weight-bold "><span className="status"><b className="text-status">กำลังจัดส่ง</b></span></h5>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 pt-4">
                            RM12345678
                            </div>
                        <div className=" col-lg-2 col-md-4 col-6 pt-4">
                            <NavLink className="text-pink" to="/PurchaseLog">
                                ดูคำสั่งซื้อ
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderPuchase
