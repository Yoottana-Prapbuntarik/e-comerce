import React, { Component } from 'react';
import '../Assets/css/member.css';
import { NavLink } from 'react-router-dom';

class Member extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid ">
                    <div className="row content">
                        <div className="col-sm-2 sidenav">
                            <div className={window.location.pathname === '/PurchaseLog' || window.location.pathname === '/Purchase' ? 'd-block linkMember AcrivelinkMember '
                                : 'd-block linkMember mt-3'}>
                                <p ><NavLink to="/Purchase">รายการสั่งซื้อ</NavLink></p>
                            </div>
                            <div className={window.location.pathname === '/Profile' ? 'd-block linkMember AcrivelinkMember '
                                : 'd-block linkMember mt-3'} >
                                <p><NavLink to="/Profile">บัญชีของฉัน</NavLink></p>
                            </div>
                            <div className={window.location.pathname === '/MyAddress' ? 'd-block linkMember AcrivelinkMember mt-3'
                                : 'd-block linkMember mt-3'}>
                                <p><NavLink to="/MyAddress">ที่อยู่ของฉัน</NavLink></p>
                            </div>
                            <div className={window.location.pathname === '/ConfirmPayment' ? 'd-block linkMember AcrivelinkMember mt-3'
                                : 'd-block linkMember mt-3'}>
                                <p><NavLink to="/ConfirmPayment">แจ้งการชำระเงิน</NavLink></p>
                            </div>
                            <div className="d-block linkMember mt-3">
                                <p><NavLink to="">ออกจากระบบ</NavLink></p>
                            </div>
                        </div>
                        <div className="col-sm-8 text-left marginTop">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Member
