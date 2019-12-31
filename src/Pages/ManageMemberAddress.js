import React, { Component } from 'react';
import { connect } from 'react-redux';
import Member from './Member';
import { faShippingFast } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Assets/css/ManageMemberAddress.css';
import FormAddress from '../Components/FormAddress';
import AddedAddress from '../Components/AddedAddress';
class ManageMemberAddress extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAddedAddress: false,
            nameAnaLastName: null,
            address: null,
            tel:null,
        }
        this.handleClickAddAddress = this.handleClickAddAddress.bind(this);
    }
    handleClickAddAddress = () => {
        this.setState({
            isAddedAddress: !this.state.isAddedAddress
        })
    }
    handleAdddedAddress = (nameAnaLastname,address,tel) =>{
        alert("ดำเนินการสำเร็จ")
        this.setState({
            nameAnaLastName:nameAnaLastname,
            address:address,
            tel:tel
        })
        this.handleClickAddAddress();
    }
    render() {
        return (
            <Member>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-12 my-5">
                            <h3 className="font-weight-bold">ที่อยู่ของฉัน</h3>
                        </div>
                        <div className="col-12 my-5">
                            <div className="container">
                                <div className="row text-center mt-5">
                                    <div className="col-12  pt-4">
                                        <FontAwesomeIcon className="iconCar" icon={faShippingFast} size="10x" />
                                    </div>
                                    <div className="col-12    pt-3">
                                        {this.state.nameAnaLastName && this.state.address && this.state.tel != null ?
                                        <div>
                                        <AddedAddress nameAnaLastName={this.state.nameAnaLastName} address={this.state.address} tel={this.state.tel}/>
                                        </div>:
                                        <p className="Text">ไม่มีข้อมูลที่อยู่</p>
                                        }
                                    </div>
                                    <div className={ `col-12  ${this.state.nameAnaLastName 
                                        && this.state.address && this.state.tel !== null && "text-left"}`}>
                                        <button className="btn btnAddAddress" onClick={this.handleClickAddAddress}>เพิ่มที่อยู่</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isAddedAddress && <FormAddress handleClickAddress={this.handleClickAddAddress} addAddress={this.handleAdddedAddress}/>}
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


export default connect(mapStateToProps)(ManageMemberAddress);
