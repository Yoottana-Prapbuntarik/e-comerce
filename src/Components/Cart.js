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

    render() {
        let { dataProduct, AllPrice } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="container bg-alphaGray pt-4 pb-4 my-2">
                            <div className="row ">
                                <div className="col-6">
                                    สินค้าของฉัน
                            </div>
                                <div className="col-3 text-center">
                                    จำนวน
                                    </div>
                                <div className="col-3 text-center">
                                    ราคา
                            </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                {
                                    dataProduct.map((dataProducts, i) => {
                                        return (
                                            <React.Fragment key={i}>
                                                <div className="col-6 mt-2">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <img  src={dataProducts === undefined ? '' : dataProducts.img} alt="img-product" width="81px" />
                                                            </div>
                                                            <div className="col-lg-8 mt-4">
                                                                <h5 >{dataProducts === undefined ? '' : dataProducts.name}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3 py-5 text-center" >
                                                    {dataProducts === undefined ? '' : dataProducts.amount}
                                                </div>
                                                <div className="col-3 py-5 text-center" >
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-8 text-right" >
                                                                {dataProducts === undefined ? '' : dataProducts.cost}

                                                            </div>
                                                            <div className="col-4"> <FontAwesomeIcon icon={faTimes} size="2x" /> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="container bg-alphaGray my-5 pt-4 pb-4  ">
                            <div className="row ">
                                <div className="col-6">
                                </div>

                                <div className="col-3 text-center">
                                    ราคารวม
                                    </div>
                                <div className="col-3 text-center ">
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

export default connect(mapStateToProps)(Cart);