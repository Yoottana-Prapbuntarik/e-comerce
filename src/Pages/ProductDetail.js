import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductSlide from '../Components/ProductSlide';
import facebook from '../Assets/images/logo/facebook.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import axios from 'axios';
class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentItems: [],
            size: "S",
            color: "สีดำ",
            amount: 1,
            dropdownOpen: false,
            dropdownColorOpen: false,

        }
        this.toggle = this.toggle.bind(this);
        this.toggleDropdownColor = this.toggleDropdownColor.bind(this);
        this.HandlePlusAmount = this.HandlePlusAmount.bind(this);
        this.HandleDeleteAmount = this.HandleDeleteAmount.bind(this);
        this.addItemToCart = this.addItemToCart.bind(this);
    }
    toggle() {
        this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
    }
    toggleDropdownColor() {
        this.setState(prevState => ({ dropdownColorOpen: !prevState.dropdownColorOpen }));
    }
    handleSize = (e) => {
        this.setState({ size: e.target.value })
    }
    handleColor = (e) => {
        this.setState({ color: e.target.value })
    }
    HandlePlusAmount = () => {
        this.setState({ amount: this.state.amount + 1 })
    }
    HandleDeleteAmount = () => {
        if (this.state.amount !== 0) {
            this.setState({ amount: this.state.amount - 1 })
        }
    }
    componentDidMount() {
        axios.get('http://www.mocky.io/v2/5db946cd30000040765ee168').then(res => {
            this.setState({
                currentItems: res.data.items
            })
        })

    }
    addItemToCart() {
        for(let idx = 0; idx < this.state.currentItems.length; idx++){
            if (parseInt(this.props.match.params.id) === this.state.currentItems[idx].id) {
              let dataToDb = {
                    name:this.state.currentItems[idx].name,
                    img:this.state.currentItems[idx].img[0].source,
                    size:this.state.size,
                    color:this.state.color,
                    amount:this.state.amount,
                    cost:this.state.currentItems[idx].cost * this.state.amount
                }
                this.props.addItems(dataToDb)
                this.props.SumCost(dataToDb.cost);
            }
        }
    }
    render() {
        return (
            <div className="MarginTopClassII container-fluid">
                {this.state.currentItems.map((data, i) => {
                    return (
                        parseInt(this.props.match.params.id) === data.id &&
                        <React.Fragment key={i}>
                            <div className="container h-50">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <ProductSlide imgSource={data} />
                                    </div>
                                    <div className="col-lg-6 col-12 ProductDetailFront">
                                        <h3 className="mt-3">{data.name}<br />{data.cost} บาท</h3>
                                        <div className="conatiner MarginTopClassIII">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="lead">
                                                        เเชร์ :&nbsp; &nbsp; <img src={facebook} alt="face แชร์" width="40" height="40" />
                                                    </div>
                                                </div>
                                                {/* Select Size Product */}
                                                <div className="col-12 mt-3">
                                                    <p className="lead">เลือกไซส์เสื้อ</p>
                                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                                        <DropdownToggle className="buttonSize text-left">
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="mr-auto">{this.state.size}</div>
                                                                    <div className="ml-auto caret"></div>
                                                                </div>
                                                            </div>
                                                        </DropdownToggle>
                                                        <DropdownMenu className="text-center">

                                                            <DropdownItem onClick={this.handleSize} value="S">S</DropdownItem>
                                                            <DropdownItem onClick={this.handleSize} value="M">M</DropdownItem>
                                                            <DropdownItem onClick={this.handleSize} value="L">L</DropdownItem>
                                                            <DropdownItem onClick={this.handleSize} value="XL">XL</DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                                {/* Select Color Product */}
                                                <div className="col-12 mt-3">
                                                    <p className="lead">เลือกสี</p>
                                                    <Dropdown isOpen={this.state.dropdownColorOpen} toggle={this.toggleDropdownColor}>
                                                        <DropdownToggle className="buttonSize">
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="mr-auto">{this.state.color}</div>
                                                                    <div className="ml-auto caret"></div>
                                                                </div>
                                                            </div>
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem onClick={this.handleColor} value="สีดำ">สีดำ</DropdownItem>
                                                            <DropdownItem onClick={this.handleColor} value="สีขาว">สีขาว</DropdownItem>
                                                            <DropdownItem onClick={this.handleColor} value="สีเขียว">สีเขียว</DropdownItem>
                                                            <DropdownItem onClick={this.handleColor} value="สีแดง">สีแดง</DropdownItem>
                                                            <DropdownItem onClick={this.handleColor} value="สีน้ำเงิน">สีน้ำเงิน</DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                                <div className="col-12 mt-3">
                                                    <p className="lead">จำนวน</p>
                                                    <ul className="list-amount">
                                                        <li className="d-inline mr-4">
                                                            <button className="btn btn-color-pink" onClick={this.HandleDeleteAmount}>
                                                                <b>-</b>
                                                            </button>
                                                        </li>
                                                        <li className="d-inline spacing-amount">
                                                            {this.state.amount}
                                                        </li>
                                                        <li className="d-inline ml-4">
                                                            <button className="btn btn-plus btn-color-pink" onClick={this.HandlePlusAmount}>
                                                                <b>+</b>
                                                            </button>
                                                        </li>

                                                    </ul>
                                                    <ul className="list-amount mt-5">
                                                        <li className="d-inline ">
                                                            <button className="btn btn-amount text-white" onClick={this.addItemToCart}>
                                                                <FontAwesomeIcon icon={faShoppingCart} /> หยิบใส่ตระกร้า
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        allCost:state.allCost
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItems: (dataToDb) => {
            dispatch({
                type: "ADD_Item",
                payload: dataToDb
            })
        },
        SumCost: (cost) => {
            dispatch({
                type: "Total",
                payload: cost
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
