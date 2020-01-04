import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Assets/css/Register.css';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentWillMount() {
        this.props.HandleLogin(false);
    }
    render() {
        return (
            <div className="boxRegister">
                <h3 className="HeaderText">สร้างบัญชี</h3>
                <div className="container">
                    <div className="row customRegisterLabel">
                        <div className="col-8 mx-auto">
                            <div className="container">
                                <div className="row">
                                    <div className="form-group col-lg-6 ">
                                        <label htmlFor="name">ชื่อ</label>
                                        <input type="text" className=" ml-auto form-control" id="name" />
                                    </div>
                                    <div className="form-group  col-lg-6">
                                        <label htmlFor="lastName">นามสกุล</label>
                                        <input type="text" className="form-control" id="lastName" />
                                    </div>
                                    <div className="form-group  col-lg-6">
                                        <label htmlFor="gender">เพศ</label>
                                        <input type="text" className=" ml-auto form-control" id="gender" />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label htmlFor="birth">วันเกิด</label>
                                        <input type="text" className="form-control" id="birth" />
                                    </div>
                                    <div className="form-group col-12">
                                        <label className="text-center" htmlFor="lastName">อีเมลล์</label>
                                        <input type="email" className="form-control LargeInput" id="lastName" />
                                    </div>
                                    <div className="form-group col-12">
                                        <label className="text-center" htmlFor="lastName">รหัสผ่าน</label>
                                        <input type="password" className="form-control LargeInput" id="lastName" />
                                    </div>
                                    <div className="form-group col-12 my-5">
                                    <button className="btn btnSubmitRegister">ลงทะเบียน</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.isLogin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        HandleLogin: (isLogin) => {
            dispatch({
                type: "Login",
                payload: isLogin
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
