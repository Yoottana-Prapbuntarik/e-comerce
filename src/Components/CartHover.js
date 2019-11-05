import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class CartHover extends Component {
    render() {
        let { dataProduct, AllPrice } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col-4">สินค้าของฉัน</th>
                                    <th scope="col-4">จำนวน</th>
                                    <th scope="col-4">ราคา</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    dataProduct.map((dataProducts, i) => {
                                        return (

                                            <tr>
                                                <td key={i}>
                                                    <img src={dataProducts === undefined ? '' : dataProducts.img} width="150px" alt="img-product" />
                                                </td>
                                                <td>{dataProducts === undefined ? '' : dataProducts.amount}</td>
                                                <td>{dataProducts === undefined ? '' : dataProducts.cost}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-4 py-3">
                        <NavLink className="btn btn-primary" to="/Mycart">ไปที่ตระกร้าของฉัน</NavLink>
                    </div>
                    <div className="col-4 py-3 text-center">
                    ราคารวม                
                    </div>
                    <div className="col-4 py-3 text-center">
                    {dataProduct === undefined ? '0' : AllPrice} บาท
                    </div>
                </div>
            </div >
        )
    }
}
export default CartHover;