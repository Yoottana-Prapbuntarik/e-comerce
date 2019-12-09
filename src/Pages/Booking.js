import React, { Component } from 'react'
import BarStatus from '../Components/BarStatus';
import { NavLink } from 'react-router-dom';
import '../Assets/css/Booking.css';
import scb from '../Assets/images/logo/scb.png';
import KrungSri from '../Assets/images/logo/KrungSri.png';
import Kasikorn from '../Assets/images/logo/Kasikorn.png';
class Booking extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <React.Fragment>
                        <div className="container-fluid MarginTopClassII">
                                <BarStatus status="Booking" indexStatus={3} />
                        </div>
                    <div className="container-fluid">
                        <div className="row text-center">
                            <div className="col-lg-6 col-12 my-5 mb-2">
                                <div className="container-fluid pt-5 BookingStyle">
                                    <div className="row ">
                                        <div className="col-12 py-3">
                                            <h4 className="font-weight-bold">ชื่อบัญชี &nbsp; วันวิสา &nbsp; ขจรพรรณพงศ์</h4>
                                            <h5 className="font-weight-bold"> &nbsp; (Wanvisa &nbsp; Khajonpanpong)</h5>
                                        </div>
                                        <div className="col-lg-6 col-12 mt-2 ">
                                            <img className="img-responsive" src={scb} alt="SCB" width="70%" />
                                        </div>
                                        <div className="col-lg-6 col-12 mt-3 font-weight-bold text-left">
                                            <p>เลขบัญชี : 367-213054-8</p>
                                            <p>สาขา : เมืองทองธานี</p>
                                        </div>
                                        <div className="col-lg-6 col-12 mt-2 ">

                                            <img className="img-responsive" src={KrungSri} alt="KrungSri" width="70%" />
                                        </div>
                                        <div className="col-lg-6 col-12 mt-3 font-weight-bold text-left">
                                            <p>เลขบัญชี : 691-103355-0</p>
                                            <p>สาขา : เพียวเพลสราชพฤกษ์</p>
                                        </div>
                                        <div className="col-lg-6 col-12 mt-2 ">
                                            <img className="img-responsive" src={Kasikorn} alt="Kasikorn" width="70%" />
                                        </div>
                                        <div className="col-lg-6 col-12 mt-3 font-weight-bold text-left">
                                            <p>เลขบัญชี : 382-224157-2</p>
                                            <p>สาขา : ตลาดเจ้าพระยา บางใหญ่</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 buttonBooking  text-center mb-5 marginTop">
                                <h1><b>สั่งซื้อเรียบร้อยแล้ว (รอชำระเงิน)</b></h1>
                                <h3 className="text-pink font-weight-bold">#20190922001</h3>
                                <h5 className="text-secondary font-weight-bold">เลขคำสั่งซื้อ</h5>
                                <h3><b>900 บาท</b></h3>
                                <h5 className="text-secondary font-weight-bold"><b>จำนวนเงินที่ต้องชำระ</b></h5>
                                <NavLink className="btn  btn-color-pink-Address  text-white w-75" to={`/ConfirmPayment`}><span className="Text-Confirm-Button ">ไปหน้าแจ้งการชำระเงิน</span></NavLink>

                                <br />
                                <NavLink className="btn btn btn-color-pink-Address  bg-white text-pink w-75 my-3" to="/"><span className="Text-Confirm-Button ">ไปหน้าแรก</span></NavLink>

                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default Booking
