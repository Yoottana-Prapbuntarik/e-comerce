import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu ,DropdownItem } from 'reactstrap';
class SortCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            sorting:"ยอดนิยม"
        }
        this.toggle = this.toggle.bind(this);
        this.handleSorting = this.handleSorting.bind(this);
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }
    handleSorting = (e) => {
        this.setState({ sorting: e.target.value })
    }
    render() {
        return (
            <Dropdown group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
                <DropdownToggle caret>
                    ประเภท {`(${this.state.sorting})`}
                </DropdownToggle>
                <div className="w-100">
                <DropdownMenu>
                    <DropdownItem onClick={this.handleSorting} value="ยอดนิยม">{this.state.sorting === "ยอดนิยม" ? <span style={{color:'#e070aa'}}>ยอดนิยม</span>:"ยอดนิยม"}</DropdownItem>
                    <DropdownItem onClick={this.handleSorting} value="ของใหม่">{this.state.sorting === "ของใหม่" ? <span style={{color:'#e070aa'}}>ของใหม่</span>:"ของใหม่"}</DropdownItem>
                    <DropdownItem onClick={this.handleSorting} value="ราคาต่ำไปสูง">{this.state.sorting === "ราคาต่ำไปสูง" ? <span style={{color:'#e070aa'}}>ราคาต่ำไปสูง</span>:"ราคาต่ำไปสูง"}</DropdownItem>
                    <DropdownItem onClick={this.handleSorting} value="ราคาสูงไปต่ำ">{this.state.sorting === "ราคาสูงไปต่ำ" ? <span style={{color:'#e070aa'}}>ราคาสูงไปต่ำ</span>:"ราคาสูงไปต่ำ"}</DropdownItem>
                </DropdownMenu>
                </div>
            </Dropdown>
        )
    }
}
export default SortCategory;