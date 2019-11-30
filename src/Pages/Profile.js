import React, { Component } from 'react';
import '../Assets/css/Purchase.css';
import { connect } from 'react-redux';
import Member from './Member'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            olderPassword: '',
            newPassword: '',
            isClickChangePassword: false,
            isClickChangProfile: false,
            name: "Tanyaporn Pungtippimanchai",
            lname: "Pungtippimanchai",
            gender: "หญิง",
            date: "9/01/1995",
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
    }
    handleChangePassword = () => {
        this.setState({
            isClickChangePassword: !this.state.isClickChangePassword
        })
    }

    handleSubmit = () => {
        alert("ดำเนินการสำเร็จ");
    }

    handleChangeProfile = () => {
        this.setState({
            isClickChangProfile: !this.state.isClickChangProfile
        })
    }
    handleChangeName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }
    handleChangeLastName = (e) => {
        this.setState({
            lname: e.target.value,
        })
    }
    handleChangeGender = (e) => {
        this.setState({
            gender: e.target.value,

        })
    }
    handleChangeDate = (e) =>{
        this.setState({
            date: e.target.value
        })
    }
    render() {
        return (
            <Member>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12 mt-5 col-12">
                            <h3 className="font-weight-bold">บัญชีของฉัน</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h5 className="mt-3 text-secondary">
                                ชื่อ
                            </h5>
                        </div>
                        <div className="col-6">
                            <h5 className="mt-3 text-secondary">
                                นามสกุล
                            </h5>
                        </div>
                        <div className="col-6">
                            <h5 className="mt-3">
                                {this.state.name}
                            </h5>
                        </div>
                        <div className="col-6">
                            <h5 className="mt-3">
                                {this.state.lname}
                            </h5>
                        </div>
                        <div className="col-6">
                            <h5 className="mt-3 text-secondary">
                                เพศ
                            </h5>
                        </div>
                        <div className="col-6">
                            <h5 className="mt-3 text-secondary">
                                วันเกิด
                            </h5>
                        </div>
                        <div className="col-6">
                            <h5 className="mt-3">
                                {this.state.gender}
                            </h5>
                        </div>
                        <div className="col-6">
                            <h5 className="mt-3">
                                {this.state.date}
                            </h5>
                        </div>
                        <div className="col-12 my-5 text-left">
                            <button className="btn btn-colorPink w-25" onClick={this.handleChangeProfile}>
                                แก้ไข
                            </button>
                        </div>
                        <div className="col-12">
                            <h5 className="mt-3 font-weight-bold">
                                จัดการรหัสผ่าน
                             </h5>
                        </div>
                        <div className="col-12 my-3 text-left">
                            <button className="btn btn-colorPink w-25" onClick={this.handleChangePassword}>
                                เปลี่ยนรหัสผ่าน
                            </button>
                        </div>
                    </div>
                </div>
                {this.state.isClickChangePassword && <div className="container">
                    <div className="row">
                        <div className="col-12 boxDialog">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 font-weight-bold py-5">
                                        <div className="container">
                                            <div className="row mb-5">
                                                <div className="form-group col-10 text-left ">
                                                    <label htmlFor="oldpassword">รหัสผ่านเดิม</label>
                                                    <input type="password" className="form-control" id="oldpassword" />
                                                </div>
                                                <div className="form-group col-10 text-left">
                                                    <label htmlFor="newpassword">ใส่รหัสผ่านใหม่</label>
                                                    <input type="password" className="form-control" id="newpassword" />
                                                </div>
                                                <div className="form-group col-10 text-left" >
                                                    <label htmlFor="newpasswordagain">ยืนยันรหัสผ่านใหม่</label>
                                                    <input type="password" className="form-control" id="newpasswordagain" />
                                                </div>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-6 text-right ">
                                                            <button className="btn  w-100 text-pink border-pink mt-3" onClick={this.handleChangePassword}>ยกเลิก</button>
                                                        </div>
                                                        <div className="col-6 text-right">
                                                            <button className="btn buttonDialog w-100 mt-3" onClick={this.handleSubmit}>เปลี่ยน</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}


                {this.state.isClickChangProfile && <div className="container">
                    <div className="row">
                        <div className="col-12 boxDialog">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 font-weight-bold py-5">
                                        <div className="container">
                                            <div className="row mb-5">
                                                <div className="form-group col-6 text-left ">
                                                    <label htmlFor="name">ชื่อ</label>
                                                    <input type="text" className="form-control" id="name" onChange={this.handleChangeName} />
                                                </div>
                                                <div className="form-group col-6 text-left">
                                                    <label htmlFor="lname">นามสกุล</label>
                                                    <input type="text" className="form-control" id="lname" onChange={this.handleChangeLastName} />
                                                </div>
                                                <div className="form-group col-6 text-left" >
                                                    <label htmlFor="gender">เพศ</label>
                                                    <input type="text" className="form-control" id="gender" onChange={this.handleChangeGender} />
                                                </div>
                                                <div className="form-group col-6 text-left" >
                                                    <label htmlFor="date">วันเกิด</label>
                                                    <input type="text" className="form-control" id="date" onChange={this.handleChangeDate} />
                                                </div>
                                                <div className="container ">
                                                    <div className="row">
                                                        <div className="col-6 text-right ">
                                                            <button className="btn  w-100 text-pink border-pink mt-3" onClick={this.handleChangeProfile}>ยกเลิก</button>
                                                        </div>
                                                        <div className="col-6 text-right">
                                                            <button className="btn buttonDialog w-100 mt-3" onClick={this.handleSubmit}>เปลี่ยนข้อมูล</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        allCost: state.allCost
    }
}


export default connect(mapStateToProps)(Profile);
