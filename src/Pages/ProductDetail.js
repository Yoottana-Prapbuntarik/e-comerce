import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductSlide from '../Components/ProductSlide';
import facebook from '../Assets/images/logo/facebook.png';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import axios from 'axios';
class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentItems: [],
            size: "S",
            dropdownOpen: false,

        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
    }
    HandleAmount = (e) => {
        this.setState({ size: e.target.value })
    }
    componentDidMount() {
        axios.get('http://www.mocky.io/v2/5db946cd30000040765ee168').then(res => {
            this.setState({
                currentItems: res.data.items
            })
        })

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
                                        <div className="conatiner MarginTopClassIII mb-5">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="lead">
                                                        เเชร์ :&nbsp; &nbsp; <img src={facebook} alt="face แชร์" width="40" height="40" />
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-3">
                                                    <p className="lead">เลือกไซส์เสื้อ</p>
                                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                                        <DropdownToggle className="buttonSize">
                                                            {this.state.size}
                                                            <div className="caret"></div>
                                                        </DropdownToggle>
                                                        <DropdownMenu className="text-center">
                                                            <DropdownItem onClick={this.HandleAmount} value="S">S</DropdownItem>
                                                            <DropdownItem onClick={this.HandleAmount} value="M">M</DropdownItem>
                                                            <DropdownItem onClick={this.HandleAmount} value="L">L</DropdownItem>
                                                            <DropdownItem onClick={this.HandleAmount} value="XL">XL</DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
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
        dataProduct: state.dataProduct
    }
}
export default connect(mapStateToProps)(ProductDetail);
