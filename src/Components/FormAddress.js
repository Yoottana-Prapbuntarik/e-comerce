import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import '../Assets/css/FormAddress.css';
import Trick2 from '../Assets/images/icon/tick2.png';
import Trick3 from '../Assets/images/icon/tick3.png';
class FormAddress extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nameAndLastName: null,
            address: null,
            tel: null,
            isCheckBox: false
        }
        this.handleNameAndLastName = this.handleNameAndLastName.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleTelephone = this.handleTelephone.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }
    handleNameAndLastName = (e) => {
        this.setState({
            nameAndLastName: e.target.value
        })
    }
    handleAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    handleTelephone = (e) => {
        this.setState({
            tel: e.target.value
        })
    }
    handleCheckBox() {
        this.setState({
            isCheckBox: !this.state.isCheckBox
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 FormAddressBox">
                        <div className="container py-4">
                            <div className="row">
                                <div className="col-6 titleHeader">
                                    ที่อยู่ของฉัน
                                </div>
                                <div className="col-6 text-right">
                                    <FontAwesomeIcon className="bgSymbol" icon={faTimes} size="2x" onClick={this.props.handleClickAddress} />
                                </div>
                            </div>
                        </div>
                        <div className="underline my-2"></div>
                        <div className="container">
                            <div className="row my-3  field">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-10 mx-auto">
                                            <div className="form-group col-12">
                                                <label className="text-center" htmlFor="nameAndLastName">ชื่อ - นามสกุล</label>
                                                <input type="text" className="form-control py-3" id="nameAndLastName" onChange={this.handleNameAndLastName} />
                                            </div>
                                            <div className="form-group col-12 ">
                                                <label className="text-center" htmlFor="address">ที่อยู่จัดส่ง</label>
                                                <input type="text" className="form-control py-5" id="address" onChange={this.handleAddress} />
                                            </div>
                                            <div className="form-group col-12 " >
                                                <label className="text-center" htmlFor="telephone">เบอร์ติดต่อ</label>
                                                <input type="tel" className="form-control py-3" id="telephone" onChange={this.handleTelephone} />
                                            </div>
                                            <div className="col-12">
                                                <div className={this.state.isCheckBox ? "checkboxCustomAfterClick" : "checkboxCustom"}>
                                                    <label>
                                                        <div >
                                                            <input type="checkbox" onClick={this.handleCheckBox} />
                                                            <b><img className="pt-1" src={this.state.isCheckBox ? Trick2 : Trick3} alt="trick" width="20px" /></b>
                                                        </div>
                                                        <div className="textCheckBox">ตั้งเป็นที่อยู่เริ่มต้น</div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="underline mt-2"></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12  text-right">
                                                        <button className="btn buttonCalcel text-pink border-pink mt-3" onClick={this.props.handleClickAddress}>ยกเลิก</button>
                                                        <button className="btn buttonChange mt-3" onClick={() => this.props.addAddress(this.state.nameAndLastName, this.state.address, this.state.tel)}>เพิ่มที่อยู่</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default FormAddress
