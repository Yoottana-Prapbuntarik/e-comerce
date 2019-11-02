import React, { Component } from 'react'

class DetailProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-12 text-left">
                    <p className="headingDetailText">รายละเอียดสินค้า</p>
                    <ul className="list-amount">
                        <li className="d-inline mr-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5 col-12 pt-4 w-100 borderDetailText">
                                        <p className="headingDetailText">ประเภทเนื้อผ้า</p>
                                    </div>
                                    <div className="col-md-7 col-12 pt-4 w-100 borderDetailText">
                                        <p className="textDetail"> ผ้าฝ้าย </p>
                                    </div>
                                    <div className="col-md-5 col-12 pt-4 w-100 borderDetailText">
                                        <p className="headingDetailText">รายละเอียดไซส์เสื้อ</p>
                                    </div>
                                    <div className="col-md-7 col-12 pt-4 w-100 borderDetailText">
                                        <p className="textDetail">
                                            ไซส์ L : รอบอก 40 นิ้ว, รอบแขนกว้าง 15 นิ้ว
                                        <br />
                                            ไซส์ XL : รอบอก 42 นิ้ว, รอบแขนกว้าง 15.5 นิ้ว
                                      </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </React.Fragment>
        )
    }
}

export default DetailProduct
