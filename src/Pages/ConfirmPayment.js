import React, { Component } from 'react';
import '../Assets/css/ConfirmPayment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/fontawesome-free-solid';
import Member from './Member'

class ConfirmPayment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slip: null,
            isShow : false
        }
    }
    uploadSlip = (e) => {
        this.setState({
            slip: e.target.value,
            isShow : !this.state.isShow
        })
    }
    StatusDialog = () => {
        this.setState({
            isShow : false
        })
    }

    render() {
        return (
            <Member>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-md-12 mt-5 col-12">
                            <h3 className="font-weight-bold">แจ้งหลักฐานการชำระเงิน</h3>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="form-group  font-weight-bold  text-secondary">
                                <label htmlFor="fnameAndlname">ชื่อ-สกุล</label>
                                <input type="text" className="form-control" id="fnameAndlname" placeholder="ชื่อ-สกุล" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-6 my-2">
                            <div className="form-group  font-weight-bold  text-secondary">
                                <label htmlFor="order">เลขที่สั่งซื้อ</label>
                                <input type="text" className="form-control" id="order" placeholder="เลขที่สั่งซื้อ" />
                            </div>
                        </div>
                        <div className="col-md-6 col-6 my-2">
                            <div className="form-group  font-weight-bold  text-secondary">
                                <label htmlFor="bath">จำนวนเงิน</label>
                                <input type="text" className="form-control" id="bath" placeholder="จำนวนเงิน" />
                            </div>
                        </div>
                        <div className="col-md-6 col-6 my-2">
                            <div className="form-group  font-weight-bold  text-secondary">
                                <label htmlFor="date">วันที่ชำระเงิน</label>
                                <input type="text" className="form-control" id="date" placeholder="วันที่ชำระเงิน" />

                            </div>
                        </div>
                        <div className="col-md-6 col-6 my-2">
                            <div className="form-group  font-weight-bold  text-secondary" >
                                <label htmlFor="bath">เลือกเวลา</label>
                                <input type="text" className="form-control" id="bath" placeholder="เลือกเวลา" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12 my-2">
                            <label className="labelStyle" htmlFor="upload"><FontAwesomeIcon icon={faUpload} /> อัพโหลดสลิป</label>
                            <div className="form-group  font-weight-bold  text-secondary" >
                                <input type="file" id="upload" placeholder="เลือกเวลา" onChange={this.uploadSlip} />
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isShow  && <div className="container">
                    <div className="row">
                        <div className="col-12 boxDialog">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 font-weight-bold   py-5">
                                        <h5>ส่งหลักฐานการโอนเงินให้กับทางร้าน</h5>
                                        <h5 className="text-secondary">เมื่อคุณกด “ส่งหลักฐาน” ทางร้านจะดำเนินการตรวจสอบความถูกต้อง
                                        และจะทำการจัดส่งสินค้าให้กับลูกค้าภายใน 2 - 3 วัน</h5>
                                    </div>
                                    <div className="col-12 text-right mb-5">
                                        <button className="btn  w-25 text-pink border-pink " onClick={this.StatusDialog}>ยกเลิก</button>
                                        <button className="btn buttonDialog w-25">ส่งหลักฐาน</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>}
            </Member>
        )
    }
}

export default ConfirmPayment;
