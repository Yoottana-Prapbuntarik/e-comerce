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

                                            <tr key={i}>
                                                <td >
                                                    <img src={dataProducts === undefined ? '' : dataProducts.img} width="50px" alt="img-product" />
                                                </td>
                                                <td><span className="font-weight-blod"> X{dataProducts === undefined ? '' : dataProducts.amount}</span> </td>
                                                <td><span className="font-weight-blod"> {dataProducts === undefined ? '' : dataProducts.cost}</span> </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <hr/>
                    </div>
                    <div className="col-4 py-3 colorButtonMyCart">
                    <NavLink className="btn btn-color-pink-Address w-100 my-5" to={`/Mycart`}>ไปที่ตระกร้าของฉัน</NavLink>
                    </div>
                    <div className="col-4 font-weight-bold py-3 text-center">
                    ราคารวม                
                    </div>
                    <div className="col-4 font-weight-bold py-3 text-center">
                    {dataProduct === undefined ? '0' : AllPrice} บาท
                    </div>
                </div>
            </div >
        )
    }
}
export default CartHover;