import React, { Component } from 'react';
import '../Assets/css/styles.css';
import { NavLink } from 'react-router-dom';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    render() {
        let { buttonName, dataProduct, AllPrice } = this.props;
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
                                {buttonName ? (
                                    <tr>
                                        <td>
                                            <NavLink className="btn btn-secondary w-100" to="/Cart">{buttonName}</NavLink>
                                        </td>
                                        <td>ราคารวม</td>
                                        <td>{dataProduct === undefined ? '' : AllPrice} บาท</td>
                                    </tr>
                                ) :
                                    (
                                        <tr>
                                            <td></td>
                                            <td>ราคารวม</td>
                                            <td>{dataProduct === undefined ? '' : AllPrice} บาท</td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;