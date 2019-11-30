import React, { Component } from 'react';
import '../Assets/css/BarStatus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/fontawesome-free-solid';
class BarStatus extends Component {
    render() {
        let { status, indexStatus } = this.props;
        let CircleNumberBox, TextBoxStatus;
        CircleNumberBox = { boxShadow: '-1px 20px 5px 25px #fff' };
        TextBoxStatus = { boxShadow: '-1px 50px 5px 25px #fff' };
        return (
            <div className="row text-center">
                <div className="container-fluid left-margin">
                    <div className="row">
                        <div className="lineStatus"></div>
                        <div className="col-lg-4  my-1 col-12">
                            <div className="row">
                                {status === 'Address' ?
                                    (
                                        <React.Fragment>
                                            <div className="col-6 col-12">
                                            </div>
                                            <div className="mr-3">
                                                <span className="circleBox" style={CircleNumberBox}>1</span>
                                            </div>
                                            <div classNam="col-6 col-12" ><span className="textfill " style={TextBoxStatus}>การส่งสินค้า</span></div>
                                        </React.Fragment>
                                    ) : indexStatus > 1?
                                        (
                                            <React.Fragment>
                                                <div className="col-6 col-12"></div>
                                                <div className="mr-3">
                                                    <span className="borderCirclePink  text-pink" style={CircleNumberBox}><FontAwesomeIcon icon={faCheck} /></span>
                                                </div>
                                                <div classNam="col-6 col-12"><span className="textfill" style={TextBoxStatus}>การส่งสินค้า</span></div>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <div className="col-6 col-12"></div>
                                                <div className="mr-3">
                                                    <span className="borderCircleAlpha" style={CircleNumberBox}>1</span>
                                                </div>
                                                <div classNam="col-6 col-12"><span className="textAlpha bg-white" style={TextBoxStatus}>การส่งสินค้า</span></div>
                                            </React.Fragment>
                                        )
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 my-1 col-12">

                            <div className="row ">
                                {status === 'Confirm' ?
                                    (
                                        <React.Fragment>
                                            <div className="col-6 col-12"></div>
                                            <div className="mr-3">
                                                <span className="circleBox" style={CircleNumberBox}>2</span>
                                            </div>
                                            <div classNam="col-6 col-12" ><span className="textfill " style={{ TextBoxStatus }}>ตรวจสอบรายการสั่งซื้อ</span></div>
                                        </React.Fragment>
                                    ) :
                                    indexStatus > 2 ?
                                        (
                                            <React.Fragment>
                                                <div className="col-6 col-12"></div>
                                                <div className="mr-3">
                                                    <span className="borderCirclePink text-pink" style={CircleNumberBox}><FontAwesomeIcon icon={faCheck} /></span>
                                                </div>
                                                <div classNam="col-6 col-12"><span className="textfill" style={TextBoxStatus}>การส่งสินค้า</span></div>
                                            </React.Fragment>
                                        ) : (
                                                <React.Fragment>
                                                    <div className="col-6 col-12"></div>
                                                    <div className="mr-3">
                                                        <span className="borderCircleAlpha" style={CircleNumberBox}>2</span>
                                                    </div>
                                                    <div classNam="col-6 col-12" ><span className="textAlpha bg-white" style={{ TextBoxStatus }}>ตรวจสอบรายการสั่งซื้อ</span></div>
                                                </React.Fragment>
                                            )

                                }
                            </div>
                        </div>
                        <div className="col-lg-4 my-1 col-12">
                            <div className="row">
                                {status === 'Booking' ?
                                    (
                                        <React.Fragment>
                                            <div className="col-6 col-12"></div>
                                            <div className="mr-3">
                                                <span className="circleBox" style={CircleNumberBox}>3</span>
                                            </div>
                                            <div classNam="col-6 col-12 bg-white"><span className="textfill" style={{ boxShadow: '-1px 50px 5px 25px #fff' }}>คำสั่งซื้อเรียบร้อย</span></div>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            <div className="col-6 col-12"></div>
                                            <div className="mr-3">
                                                <span className="borderCircleAlpha" style={CircleNumberBox}>3</span>
                                            </div>
                                            <div classNam="col-6 col-12"><span className="textAlpha bg-white" style={{ boxShadow: '-1px 50px 5px 25px #fff' }}>คำสั่งซื้อเรียบร้อย</span></div>
                                        </React.Fragment>
                                    )
                                }
                            </div >
                        </div >
                    </div >
                </div>
            </div >
        )
    }
}

export default BarStatus;