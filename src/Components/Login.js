import React, { Component } from 'react';
import '../Assets/css/Login.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import Trick2 from '../Assets/images/icon/tick2.png';
import Trick3 from '../Assets/images/icon/tick3.png';
import facebook from '../Assets/images/logo/facebook.png';
import line from '../Assets/images/logo/line.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isCheckBox: false,
            isLogin: false
        }
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }
    handleCheckBox = () => {
        this.setState({
            isCheckBox: !this.state.isCheckBox
        })
    }


    render() {

        return (
            <div className="containerLogin">
                <div className="container">
                    <div className="row">
                        <div className="warpper-box">
                            <div className="boxLogin">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6 my-3 title ">
                                            เข้าสู่ระบบ
                                        </div>
                                        <div className="col-6 my-3 text-right">
                                            <FontAwesomeIcon icon={faTimes} size="2x" onClick={() => this.props.HandleLogin(!this.props.isLogin)} />
                                        </div>
                                        <div className="underline mb-3"></div>
                                        <div className="col-12 inputDataMember">
                                            <input type="text" />
                                        </div>
                                        <div className="col-12 inputDataMember">
                                            <input type="password" />
                                        </div>

                                        <div className="col-lg-6 pl-5 my-2">
                                            <div className={this.state.isCheckBox ? "checkboxCustomAfterClick" : "checkboxCustom"}>
                                                <label className="pl-2">
                                                    <input type="checkbox" onClick={this.handleCheckBox} />
                                                    <b><img src={this.state.isCheckBox ? Trick2 : Trick3} alt="trick" width="15px" /></b>
                                                    <span className="pl-2 textCheckBox">จดจำการเข้าสู่ระบบ</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 text-center  my-2  textForgotPassword">
                                            <span className="pl-auto"> ลืมรหัสผ่าน?</span>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-pink">เข้าสู่ระบบ</button>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-alpha">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-3 text-left">
                                                            <img src={facebook} alt="logo facebook" width="32px" />
                                                        </div>
                                                        <div className="col-9 textButtonOauth  text-left">
                                                            <span>  เข้าสู่ระบบด้วย Facebook </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-alpha">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-3 text-left">
                                                            <img src={line} alt="logo facebook" width="32px" />
                                                        </div>
                                                        <div className="col-9 textButtonOauth text-left">
                                                            <span> เข้าสู่ระบบด้วย Line </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="col-12 text-center my-3">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-3 line">
                                                    </div>
                                                    <div className="col-6">
                                                        ยังไม่เคยสมัครมาก่อน
                                                    </div>
                                                    <div className="col-3 line">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <NavLink className="col-12 text-center textRegister pb-5 " to="/register">
                                            สมัครสมาชิกด้วยอีเมล์
                                        </NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
