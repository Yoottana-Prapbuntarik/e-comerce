import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartHover from './CartHover';
import { connect } from 'react-redux';
import { faSearch, faShoppingCart, faAngleDown } from '@fortawesome/fontawesome-free-solid';
import mainLogo from '../Assets/images/logo/nattraphak.png';
import SearchBox from './SearchBox';
class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            scrolling: false,
            isHover: "none",
            search: false,
        }
        this.closeNav = this.closeNav.bind(this);
        this.toggle = this.toggle.bind(this);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.HandleSearch = this.HandleSearch.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    closeNav() {
        this.setState({
            isOpen: false,
        })
    }
    mouseEnter() {
        this.setState({ isHover: "block" })
    }

    mouseLeave() {
        setTimeout(
            function () {
                this.setState({ isHover: "none" })

            }
                .bind(this),
            3000
        );
    }
    HandleSearch() {
        let currentPath = window.location.pathname;
        if (currentPath !== "/") {
            window.location.href = "/";
        }
        this.setState({
            search: !this.state.search
        })
    }
    render() {
        let eventScroll = { padding: '1.25rem 1rem' }
        if (this.props.detectScroll > 0) {
            eventScroll = {
                transition: '0.5s',
                padding: ' 0.6rem 1rem'
            }
        }
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <Navbar style={eventScroll} className="text-center  alpha  fixed-top" light expand="lg">
                            <NavLink className="navbar-brand" to="/">
                                <img src={mainLogo} className="logo" alt="logo" />
                            </NavLink>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <div className="alignAutoRight">
                                    <Nav navbar>

                                        <NavItem className="navbarLink">
                                            <NavLink to="/" onClick={this.closeNav}>หน้าหลัก</NavLink>
                                        </NavItem>
                                        <NavItem className="navbarLink">
                                            <NavLink to="/Product" onClick={this.closeNav}>สินค้าทั้งหมด</NavLink>
                                        </NavItem>
                                        <NavItem className="navbarLink">
                                            <NavLink to="/News" onClick={this.closeNav}>สินค้าใหม่</NavLink>
                                        </NavItem>
                                        <NavItem className="navbarLink">
                                            <NavLink to="/Promotion" onClick={this.closeNav} >สินค้าโปรโมชั่น</NavLink>
                                        </NavItem>
                                    </Nav>

                                </div>
                                <div className=" ml-auto">
                                    <Nav navbar>
                                        <NavItem className="navbarLink">
                                            <NavLink to="/" onClick={this.closeNav} >สวัสดี Thanyaporn
                                            &nbsp; <FontAwesomeIcon icon={faAngleDown} />
                                            </NavLink>
                                        </NavItem>
                                        <div className="hrVertical"></div>
                                        <NavItem className="navbarLink">
                                            <NavLink to="/">
                                                <FontAwesomeIcon icon={faSearch} onClick={this.HandleSearch} />
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="cart-nav navbarLink">
                                            <NavLink to="/Mycart" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                                                <FontAwesomeIcon icon={faShoppingCart} />
                                                &nbsp;&nbsp; {this.props.addedItems.length > 0 ? <span>({this.props.addedItems.length})</span> : <span>(0)</span>}
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <div className="container">
                                        {this.state.search === true && <SearchBox />}
                                    </div>
                                </div>
                            </Collapse>
                        </Navbar>
                    </div>
                </div>
                {<div className="CartHover" style={{ display: this.state.isHover }}><CartHover AllPrice={this.props.allCost} dataProduct={this.props.addedItems} /></div>}
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        allCost: state.allCost

    }
}
export default connect(mapStateToProps)(NavigationBar);