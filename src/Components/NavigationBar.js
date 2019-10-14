import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/fontawesome-free-solid';
import mainLogo from'../Assets/images/logo/nattraphak.png';

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            scrolling: false,
            isHover: false,
        }
        this.closeNav = this.closeNav.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
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
    render() {
    
        return (
            <React.Fragment>
                <div>
                    <Navbar className="text-center alpha  fixed-top" light expand="lg">
                        <div style={{ marginLeft: '2%' }}>
                            <NavLink className="navbar-brand" to="/">
                                <img src={mainLogo} className="logo" alt="logo"/>
                            </NavLink>
                        </div>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <div>
                                <Nav className="mr-auto" navbar>

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
                        </Collapse>
                    </Navbar>
                </div>
            </React.Fragment>
        );
    }
}
export default NavigationBar;