import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    DeleteItem = () => (id) => {
        let confirm = window.confirm("คุณต้องการยกเลิกสินค้าใช่หรือไม่");
        if (confirm) {
            this.props.DeleteItem(id);
        }
    }
    render() {
        let { dataProduct, AllPrice } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="container bg-alphaGray py-5 my-2">
                            <div className="row ">
                                <div className="col-3">
                                    สินค้าของฉัน
                            </div>
                                <div className="col-3 text-right">
                                    จำนวน
                                    </div>
                                <div className="col-3 text-right">
                                    ราคา
                            </div>
                                <div className="col-3 pl-5">
                                    <span className="pl-5"></span>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                {
                                    dataProduct.map((dataProducts, i) => {
                                        return (
                                            <React.Fragment>
                                                <div className="col-3 mt-2" key={i}>
                                                    <img src={dataProducts === undefined ? '' : dataProducts.img} width="100%" alt="img-product" />
                                                </div>
                                                <div className="col-3 py-5 text-right" key={i}>
                                                    {dataProducts === undefined ? '' : dataProducts.amount}
                                                </div>
                                                <div className="col-3 py-5 text-right" key={i}>
                                                    {dataProducts === undefined ? '' : dataProducts.cost}
                                                </div>
                                                <div className="col-3 text-left pl-5 py-5 ">
                                                    <FontAwesomeIcon icon={faTimes} size="2x"/>
                                                </div>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="container bg-alphaGray my-5 py-5">
                            <div className="row ">
                                <div className="col-6">
                                </div>
                                <div className="col-3 text-left">
                                    ราคารวม
                                    </div>
                                <div className="col-3">
                                    {dataProduct === undefined ? '0' : AllPrice} บาท
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        allCost: state.allCost
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        DeleteItem: (id) => {
            dispatch({
                type: "DeleteItem",
                payload: id
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
