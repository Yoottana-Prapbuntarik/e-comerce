import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: "",
            items: [],
            query: []

        }
        this.HandleChangeTextInput = this.HandleChangeTextInput.bind(this)
        this.onHandleSearch = this.onHandleSearch.bind(this)
    }
    HandleChangeTextInput(e) {
        for (let idx = 0; idx < this.state.items.length; idx++) {

        }
    }

        onHandleSearch() {

        }
        componentDidMount() {
            this.props.dataProduct.map(datas => {
                return this.setState({
                    items: datas
                })
            })
        }

        render() {
            return (
                <div className="container div-search">
                    <h5 className="text-left">ค้นหาเสื้อผ้า</h5>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control fixedFocus" placeholder="serach" aria-label="serach" aria-describedby="basic-addon2" onChange={this.HandleChangeTextInput} />
                    </div>
                    <div className="search" onClick={this.onHandleSearch}>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </div>
                </div >
            )
        }
    }
    const mapStateToProps = (state) => {
        return {
            dataProduct: state.dataProduct

        }
    }
    export default connect(mapStateToProps)(SearchBox);
