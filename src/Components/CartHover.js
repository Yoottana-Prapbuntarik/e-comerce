import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class CartHover extends Component {
    render() {
        let { dataProduct, AllPrice } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="container my-5">
                            <div className="row">
                                <div className="col-12">
                                    <h5 className="font-weight-bold">ตะกร้าสินค้าของฉัน</h5>
                                </div>
                                {
                                    dataProduct.map((dataProducts, i) => {
                                        return (
                                            <React.Fragment key={i}>
                                                <div className="col-8  mt-2">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-2">
                                                            <img src={dataProducts === undefined ? '' : dataProducts.img} width="50px" alt="img-product" />
                                                           </div>
                                                            <div className="col-10 text-center mt-4"><span className="font-weight-bold"> {dataProducts === undefined ? '' : dataProducts.name}</span> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2  mt-2 py-4"><span className="font-weight-bold"> X{dataProducts === undefined ? '' : dataProducts.amount}</span> </div>
                                                <div className="col-2  mt-2 py-4"><span className="font-weight-bold"> {dataProducts === undefined ? '' : dataProducts.cost.toLocaleString()}</span> </div>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                            <hr />
                            <div className="row mt-5">
                                <div className="col-4   colorButtonMyCart">
                                    <NavLink className="btn btn-color-pink-Address w-100 " to={`/Mycart`}>ไปที่ตระกร้าของฉัน</NavLink>
                                </div>
                                <div className="col-4  font-weight-bold py-2 text-center">
                                    ราคารวม
                            </div>
                                <div className="col-4  font-weight-bold py-2 text-center">
                                    {dataProduct === undefined ? '0' : AllPrice.toLocaleString()} บาท
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default CartHover;