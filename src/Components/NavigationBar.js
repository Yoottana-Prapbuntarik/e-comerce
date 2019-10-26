import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faAngleDown } from '@fortawesome/fontawesome-free-solid';
import mainLogo from '../Assets/images/logo/nattraphak.png';
import SearchBox from './SearchBox';
class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            scrolling: false,
            isHover: false,
            search: false
        }
        this.closeNav = this.closeNav.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
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
    handleMouseHover() {
        this.setState({
            isHover: !this.state.isHover,
        })
    }
    handleMouseUp() {
        this.setState({
            isHover: false,
        })
    }
    HandleSearch() {
        let currentPath = window.location.pathname;
        if(currentPath !== "/"){
            window.location.href = "/";
        }
        this.setState({
            search: !this.state.search
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Navbar className="text-center  alpha  fixed-top" light expand="lg">
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
                                        <NavLink to="/Promotion" onClick={this.closeNav}>สินค้าโปรโมชั่น</NavLink>
                                    </NavItem>
                                </Nav>

                            </div>
                            <div className=" ml-auto">
                                <Nav navbar>
                                    <NavItem className="navbarLink">
                                        <NavLink to="/" onClick={this.closeNav}>สวัสดี Thanyaporn
                                            &nbsp; <FontAwesomeIcon icon={faAngleDown} />
                                        </NavLink>
                                    </NavItem>
                                    <div className="hrVertical"></div>
                                    <NavItem className="navbarLink">
                                        <NavLink to="">
                                            <FontAwesomeIcon icon={faSearch} onClick={this.HandleSearch} />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="cart-nav navbarLink">
                                        <NavLink to="/Product" onClick={this.closeNav}>
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                            &nbsp;&nbsp; <span>(0)</span>
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
            </React.Fragment>
        );
    }
}
export default NavigationBar;