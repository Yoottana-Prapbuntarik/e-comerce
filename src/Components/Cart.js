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
                                <div className="col-6 text-confirm font-weight-bold">
                                    สินค้า
                            </div>
                                <div className="col-3 text-left text-confirm font-weight-bold">
                                    จำนวน
                                    </div>
                                <div className="col-3  text-left text-confirm font-weight-bold">
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
                                                            <div className="col-lg-4 wrapper-img">
                                                                <img  src={dataProducts === undefined ? '' : dataProducts.img} alt="img-product"/>
                                                            </div>
                                                            <div className="col-lg-8 mt-4">
                                                                <h5 >{dataProducts === undefined ? '' : dataProducts.name}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2 py-5 text-left" >
                                                    {dataProducts === undefined ? '' : 'X' + dataProducts.amount}
                                                </div>
                                                <div className="col-4 py-5 " >
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-6  text-right" >
                                                                {dataProducts === undefined ? '' : dataProducts.cost.toLocaleString()} บาท

                                                            </div>
                                                            <div className="col-6  text-right"> <FontAwesomeIcon icon={faTimes} size="2x" /> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="container bg-alphaGray my-3 pt-4 pb-4  ">
                            <div className="row ">
                                <div className="col-6">
                                </div>

                                <div className="col-3 text-left text-confirm font-weight-bold">
                                    ราคารวม
                                    </div>
                                <div className="col-3 text-left text-confirm font-weight-bold">
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
const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        allCost: state.allCost
    }
}

export default connect(mapStateToProps)(Cart);