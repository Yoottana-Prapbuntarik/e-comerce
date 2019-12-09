import React, { Component } from 'react';
import '../Assets/css/BarStatus.css'
import trick from '../Assets/images/icon/tick.png';
class BarStatus extends Component {
    render() {
        let { status, indexStatus } = this.props;
        let backgroundWhiteAndShadow, backgroundWhiteUnderNumber;
        backgroundWhiteAndShadow = { boxShadow: '-1px 20px 1px 14.8px #fff', background: '#fff' };
        backgroundWhiteUnderNumber = { background: '#fff', paddingLeft: '17px' }
        return (
            <div className="row">
                <div className="container-fluid left-margin">
                    <div className="row">
                        <div className="lineStatus"></div>
                        <div className="col-lg-4  my-1 col-12">
                            <div className="row">
                                {status === 'Address' ?
                                    (
                                        <React.Fragment>
                                            <div className="mr-3" style={backgroundWhiteUnderNumber}>
                                                <span className="circleBoxPink" >1</span>
                                            </div>
                                            <div style={backgroundWhiteAndShadow} ><span className="textfill">การส่งสินค้า</span></div>
                                        </React.Fragment>
                                    ) : indexStatus > 1 ?
                                        (
                                            <React.Fragment>
                                                <div className="mr-3" style={backgroundWhiteUnderNumber}>
                                                    <span className="borderCirclePink  text-pink">
                                                        <img className="d-inline-block ml-1" src={trick} width="14px" alt="icon trick" />
                                                    </span>
                                                </div>
                                                <div style={backgroundWhiteAndShadow}><span className="textfill">การส่งสินค้า</span></div>
                                            </React.Fragment>
                                        ) : ('')
                                }
                            </div>
                        </div>
                        <div className="col-lg-4 my-1 col-12">

                            <div className="row ">
                                {status === 'Confirm' ?
                                    (
                                        <React.Fragment>
                                            <div className="mr-3" style={backgroundWhiteUnderNumber}>
                                                <span className="circleBoxPink">2</span>
                                            </div>
                                            <div style={backgroundWhiteAndShadow}><span className="textfill ">ตรวจสอบรายการสั่งซื้อ</span></div>
                                        </React.Fragment>
                                    ) :
                                    indexStatus > 2 ?
                                        (
                                            <React.Fragment>
                                                <div className="mr-3" style={backgroundWhiteUnderNumber}>
                                                    <span className="borderCirclePink text-pink" >
                                                    <img className="d-inline-block ml-1" src={trick} width="14px" alt="icon trick" />
                                                    </span>
                                                </div>
                                                <div style={backgroundWhiteAndShadow}><span className="textfill" >ตรวจสอบรายการสั่งซื้อ</span></div>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <div className="mr-3" style={backgroundWhiteUnderNumber}>
                                                    <span className="borderCircleAlpha textAlpha">2</span>
                                                </div>
                                                <div style={backgroundWhiteAndShadow}><span className="textAlpha bg-white ">ตรวจสอบรายการสั่งซื้อ</span></div>
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
                                            <div className="mr-3" style={backgroundWhiteUnderNumber}>
                                                <span className="circleBoxPink">3</span>
                                            </div>
                                            <div style={backgroundWhiteAndShadow}><span className="textfill">คำสั่งซื้อเรียบร้อย</span></div>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            <div className="mr-3"  style={backgroundWhiteUnderNumber}>
                                                <span className="borderCircleAlpha textAlpha">3</span>
                                            </div>
                                            <div style={backgroundWhiteAndShadow} ><span className="textAlpha bg-white">คำสั่งซื้อเรียบร้อย</span></div>
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