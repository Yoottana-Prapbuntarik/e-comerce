import React, { Component } from 'react';
import BarStatus from '../Components/BarStatus';
import '../Assets/css/Address.css';
import { NavLink } from 'react-router-dom';
class CardAddress extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="MarginTopClassII">
                    <div className="container-fluid">
                        <BarStatus status="Address" indexStatus={1} />
                        <div className="row">
                            <div className=" mx-auto col-md-6">
                                <form className="mt-3">
                                    <div className="row">
                                        <div className="row mx-auto mt-2">
                                            <div className="col-12 font-weight-bold">
                                                <label htmlFor="name-lname">ชื่อ - นามสกุล</label>
                                                <input type="text" className="custome-form" id="name-lname" />
                                            </div>
                                        </div>
                                        <div className="row mx-auto mt-2">
                                            <div className="col-12 font-weight-bold">
                                                <label htmlFor="address">ที่อยู่จัดส่ง</label>
                                                <input type="text" className="custome-form" id="address" placeholder="เลขที่บ้าน หมู่บ้าน คอนโด ชื่อถนน" />
                                            </div>
                                        </div>

                                        <div className="row mx-auto">
                                            <div className=" col-lg-6 mt-2">
                                                <input type="text" className="custome-form-children" id="Address" placeholder="แขวง" />
                                            </div>
                                            <div className=" col-lg-6 mt-2">
                                                <input type="text" className="custome-form-children" id="Address" placeholder="เขต" />
                                            </div>
                                        </div>
                                        <div className="row mx-auto">
                                            <div className="col-lg-6 mt-2">
                                                <input type="text" className="custome-form-children" id="Address" placeholder="จังหวัด" />
                                            </div>
                                            <div className="col-lg-6 mt-2">
                                                <input type="text" className="custome-form-children" id="Address" placeholder="รหัสไปรษณีย์" />
                                            </div>
                                        </div>
                                        <div className="row mx-auto mt-2">
                                            <div className="col-12 font-weight-bold">
                                                <label htmlFor="tel">เบอร์ติดต่อ</label>
                                                <input type="tel" pattern=".{10}" className="custome-form" id="tel" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <NavLink to={`/Confirm`}>
                                            <button className="btn btn-color-pink-Address w-100 my-4" disabled={false}>
                                                ถัดไป
                                        </button>
                                        </NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default CardAddress;