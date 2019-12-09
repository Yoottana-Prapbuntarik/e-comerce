import React, { Component } from 'react';
import BarStatus from '../Components/BarStatus';
import '../Assets/css/Address.css';
import { NavLink } from 'react-router-dom';
class CardAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            telephon: '',
            isCorrect: true
        }
    }

    handleChange(e) {
        const telephon = (e.target.validity.valid && e.target.value.length <= 10) ? e.target.value : this.state.telephon;
        parseInt(telephon);
        this.setState({ telephon });
        if (telephon.length === 10) {
            this.setState({
                isCorrect: false
            })
        }else{
            this.setState({
                isCorrect: true
            })
        }
    }
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
                                            <div className="col-lg-12 font-weight-bold">
                                                <label className="mt-2" htmlFor="name-lname">ชื่อ - นามสกุล</label>
                                                <input type="text" className="custome-form" id="name-lname" />
                                            </div>
                                            <div className="col-lg-12 font-weight-bold">
                                                <label className="mt-2" htmlFor="address">ที่อยู่จัดส่ง</label>
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
                                        <div className="col-lg-12 font-weight-bold">
                                            <label className="mt-2" htmlFor="tel">เบอร์ติดต่อ</label>
                                            <input type="text" className="custome-form" id="tel" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.telephon}/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <NavLink to={`/Confirm`}>
                                            <button className="btn btn-color-pink-Address w-100 my-4" disabled={this.state.isCorrect}>
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