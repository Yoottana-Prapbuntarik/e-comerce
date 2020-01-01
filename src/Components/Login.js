import React, { Component } from 'react';
import '../Assets/css/Login.css';
import {faTimes} from '@fortawesome/fontawesome-free-solid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
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
                                            <FontAwesomeIcon icon={faTimes} size="2x"/>
                                        </div>
                                        <div className="underline mb-3"></div>
                                        <div className="col-12">
                                            <input type="text" />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" />
                                        </div>
                                        <div className="col-6 text-center my-3 bg-success">
                                            checkbox
                                        </div>
                                        <div className="col-6 text-center my-3 bg-warning ">
                                            ลืมรหัสผ่าน
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-pink">เข้าสู่ระบบ</button>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-alpha">เข้าสู่ระบบ Facebook</button>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-alpha">เข้าสู่ระบบ Line</button>
                                        </div>
                                        <div className="col-12 text-center my-3">
                                        ยังไม่เคยสมัครมาก่อน
                                        </div>
                                        <div className="col-12 text-center pb-5 ">
                                        สมัครสมาชิกด้วยอีเมล์
                                        </div>
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

export default Login
