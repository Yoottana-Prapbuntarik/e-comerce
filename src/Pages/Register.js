import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Assets/css/Register.css';
const emojiRegex = require('emoji-regex');
const regexEmoji = emojiRegex();
// pattern regex form
    let regexString = /^([A-Za-zก-๙]+$)/,
    regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
    regexPassword = /^[#\w@_-]{8,20}$/,
    regexBirthDay = /\d{4}-\d{2}-\d{2}/,
    regexGender = /[ชาย|หญิง]{3,4}$/i;
// regexTelephone = /^\d{11}$/;

//check boolean form
let isValidName, isValidLastName, isValidEmail, isValidGender, isValidPassword, isValidBirthDay;
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastName: "",
            gender: "",
            birth: null,
            email: "",
            password: null,
        }
        this.handleName = this.handleName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handleBirth = this.handleBirth.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount() {
        this.props.HandleLogin(false);
    }
    handleName = (e) => {
        let field = e.target.value;
        if (regexString.test(field) === false || regexEmoji.test(field) === true) {
            isValidName = false;
        } else {
            isValidName = true;
        }
        this.setState({
            name: e.target.value
        })

    }
    handleLastName = (e) => {
        let field = e.target.value;
        if (regexString.test(field) === false || regexEmoji.test(field) === true) {
            isValidLastName = false;
        } else {
            isValidLastName = true;
        }
        this.setState({
            lastName: e.target.value
        })
    }
    handleGender = (e) => {
        let field = e.target.value
        if (regexGender.test(field) === false || regexEmoji.test(field) === true) {
            isValidGender = false;
        } else {
            isValidGender = true;
        }
        this.setState({
            gender: e.target.value
        })
    }
    handleBirth = (e) => {        
        let field = e.target.value
        if (regexBirthDay.test(field) === false || regexEmoji.test(field) === true) {
            isValidBirthDay = false;
        } else {
            isValidBirthDay = true;
        }
        this.setState({
            birth: e.target.value
        })
    }
    handleEmail = (e) => {
        let field = e.target.value;
        if (regexEmail.test(field) === false || regexEmoji.test(field) === true) {
            isValidEmail = false;
        } else {
            isValidEmail = true;
        }
        this.setState({
            email: e.target.value
        })
    }

    handlePassword = (e) => {
        let field = e.target.value;
        if (regexPassword.test(field) === false || regexEmoji.test(field) === true) {
            isValidPassword = false;
        } else {
            isValidPassword = true;
        }
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name: '',
            lastName: '',
            gender: '',
            birth: null,
            email: '',
            password: null,
        })
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
                                        <input type="text" value={this.state.name} className="ml-auto form-control" id="name" onChange={this.handleName} />
                                        {isValidName === false && <small className="text-danger">โปรดกรอกชื่อ ก-ฮ และ A-Z</small>}
                                    </div>
                                    <div className="form-group  col-lg-6">
                                        <label htmlFor="lastName">นามสกุล</label>
                                        <input type="text" className="form-control" id="lastName" onChange={this.handleLastName} />
                                        {isValidLastName === false && <small className="text-danger">โปรดกรอกนามสกุล ก-ฮ และ A-Z</small>}
                                    </div>
                                    <div className="form-group  col-lg-6">
                                        <label htmlFor="gender">เพศ</label>
                                        <input type="text" className=" ml-auto form-control" id="gender" onChange={this.handleGender} />
                                        {isValidGender === false && <small className="text-danger">โปรดระบุเพศให้ถูกต้อง</small>}
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label htmlFor="birthDay">วันเกิด</label>
                                        <input  type="date"  className="form-control"  id="birthDay" onChange={this.handleBirth} />
                                        {isValidBirthDay === false && <small className="text-danger">11/30/2000</small>}
                                    </div>
                                    <div className="form-group col-12">
                                        <label className="text-center" htmlFor="email">อีเมลล์</label>
                                        <input type="email" className="form-control LargeInput" id="email" onChange={this.handleEmail} />
                                        {isValidEmail === false && isValidEmail !== null && <small className="text-danger">โปรรดระบุอีเมลล์ให้ถูกต้อง</small>}
                                    </div>
                                    <div className="form-group col-12">
                                        <label className="text-center" htmlFor="password">รหัสผ่าน</label>
                                        <input type="password" className="form-control LargeInput" onChange={this.handlePassword} id="password" />
                                        {isValidPassword === false && isValidEmail !== null && <small className="text-danger">รหัสผ่านควรมีอย่างน้อย 8 ตักษร </small>}
                                    </div>
                                    <div className="form-group col-12 my-5">
                                        <button className="btn btnSubmitRegister" onClick={this.handleSubmit}>ลงทะเบียน</button>
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
