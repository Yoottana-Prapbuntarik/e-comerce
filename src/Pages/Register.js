import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Assets/css/Register.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lname: '',
            gender: '',
            birth: null,
            email: '',
            username: '',
            password: null,
        }
        this.handleName = this.handleName.bind(this);
        this.handleLname = this.handleLname.bind(this);
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
        this.setState({
            name: e.target.value
        })
    }
    handleLname = (e) => {
        this.setState({
            lname: e.target.value
        })
    }
    handleGender = (e) => {
        this.setState({
            gender: e.target.value
        })
    }
    handleBirth = (e) => {
        this.setState({
            birth: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name: '',
            lname: '',
            gender: '',
            birth: null,
            email: '',
            username: '',
            password: null,
        })
    }
    render() {
        console.log(this.state.name , this.state.lname , this.state.gender, this.state.birth,
            this.state.email, this.state.password)
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
                                        <input  type="text" className=" ml-auto form-control" id="name" onChange={this.handleName} />
                                    </div>
                                    <div className="form-group  col-lg-6">
                                        <label htmlFor="lastName">นามสกุล</label>
                                        <input type="text" className="form-control" id="lastName" onChange={this.handleLname} />
                                    </div>
                                    <div className="form-group  col-lg-6">
                                        <label htmlFor="gender">เพศ</label>
                                        <input type="text" className=" ml-auto form-control" id="gender" onChange={this.handleGender} />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label htmlFor="birth">วันเกิด</label>
                                        <input type="text" className="form-control" id="birth" onChange={this.handleBirth} />
                                    </div>
                                    <div className="form-group col-12">
                                        <label className="text-center" htmlFor="email">อีเมลล์</label>
                                        <input type="email" className="form-control LargeInput" id="email" onChange={this.handleEmail} />
                                    </div>
                                    <div className="form-group col-12">
                                        <label className="text-center" htmlFor="password">รหัสผ่าน</label>
                                        <input type="password" className="form-control LargeInput" onChange={this.handlePassword} id="password" />
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
