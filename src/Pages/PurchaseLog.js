import React, { Component } from 'react';
import '../Assets/css/Purchase.css';
import { connect } from 'react-redux';
import Cart from '../Components/Cart';
import Member from './Member'

class PurchaseLog extends Component {
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
                            <p className="text-secondary font-weight-bold">รายการสั่งซื้อ > <span className="text-dark">ดูคำสั่งซื้อ #20190922001</span></p>
                            <h5 className="font-weight-bold my-4">สถานะ: &nbsp;<span className="status"><b className="text-status">กำลังจัดส่ง</b></span></h5>
                            <h5 className="font-weight-bold mt-4">ที่อยู่สำหรับการจัดส่ง</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 ">
                            <h5 className="mt-3">
                                ชื่อ - นามสกุล ผู้รับ
                            </h5>
                        </div>
                        <div className="col-8">
                            <h5 className="mt-3">
                                ธันยพร ปึงทิพย์พิมานชัย
                            </h5>
                        </div>
                        <div className="col-4 ">
                            <h5 className="mt-3">
                                ที่อยู่ผู้ผู้รับ
                            </h5>
                        </div>
                        <div className="col-8">
                            <h5 className="mt-3">
                                97/9 ถนน บางกรวย - ไทรน้อย  ตำบลบางเลน  อำเภอบางใหญ่  จังหวัดนนทบุรี  11140
                            </h5>
                        </div>
                        <div className="col-4 ">
                            <h5 className="mt-3">
                                เบอร์โทรผู้รับ
                            </h5>
                        </div>
                        <div className="col-8">
                            <h5 className="mt-3">
                                0823456789
                            </h5>
                        </div>
                        <Cart dataProduct={this.props.addedItems} AllPrice={this.props.allCost} DeleteProduct={this.DeleteItem}/>
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


export default connect(mapStateToProps)(PurchaseLog);
