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
                                        <div className="form-group col-12 font-weight-bold my-2">
                                            <label htmlFor="fnameAndlname">ชื่อ - นามสกุล</label>
                                            <input type="text" className="form-control" id="fnameAndlname" />
                                        </div>
                                        <div className="form-group my-2 font-weight-bold col-12">
                                            <label htmlFor="Address">ที่อยู่จัดส่ง</label>
                                            <input type="text" className="form-control" id="Address" placeholder="เลขที่ หมู่บ้าน คอนโด ชื่อถนน" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-6 my-2">
                                            <input type="text" className="form-control" id="Address" placeholder="แขวง" />
                                        </div>
                                        <div className="form-group col-6 my-2">
                                            <input type="text" className="form-control" id="Address" placeholder="เขต" />
                                        </div>
                                        <div className="form-group col-6 my-2">
                                            <input type="text" className="form-control" id="Address" placeholder="จังหวัด" />
                                        </div>
                                        <div className="form-group col-6 my-2">
                                            <input type="text" className="form-control" id="Address" placeholder="รหัสไปรษณีย์" />
                                        </div>
                                    </div>
                                    <div className="form-group  mt-4 font-weight-bold">
                                        <label htmlFor="tel">เบอร์ติดต่อ</label>
                                        <input type="tel" pattern=".{10}" className="form-control" id="tel" />
                                    </div>
                                    <div className="col-12">
                                        <NavLink to={`/Confirm`}>
                                            <button className="btn btn-color-pink-Address w-100 my-5" disabled={false}>
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