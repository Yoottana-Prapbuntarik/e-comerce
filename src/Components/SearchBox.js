import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: "",
            items: [],
            query: '',
            redirect: false
        }
        this.HandleChangeTextInput = this.HandleChangeTextInput.bind(this)
        this.onHandleSearch = this.onHandleSearch.bind(this)
    }
    componentDidMount() {
        this.props.dataProduct.map(datas => {
            return this.setState({
                items: datas
            })
        })
        document.addEventListener("keydown", this.onPressed.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onPressed.bind(this));
    }
    HandleChangeTextInput(e) {
        this.setState({
            textInput: e.target.value
        })
    }
    onPressed(e) {
        if (e.keyCode === 13) {
            this.onHandleSearch();
        }
    }
    onHandleSearch() {
        let count = 0;
        let currentItems = [];
        for (let idx = 0; idx < this.state.items.length; idx++) {
            for (let idxWord = 0; idxWord < this.state.textInput.length; idxWord++) {
                if (this.state.items[idx].name[count] === this.state.textInput[idxWord]) {
                    if (count < this.state.textInput.length) {
                        count = count + 1;
                    }
                    currentItems.push(this.state.items[idx]);
                    let ItemsSearch = [];
                    for (let i = 0; i < currentItems.length; i++) {
                        if (currentItems[i] !== currentItems[i + 1]) ItemsSearch.push(currentItems[i]);
                        this.setState({
                            query: ItemsSearch
                        })
                    }
                }
            }
        }
        this.setState({ redirect: true })
        this.props.getTextSearch(this.state.textInput);
        this.props.getSearch(this.state.query);
    }
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/ResultsSearch' />;

        }
        return (
            <div className="container div-search">
                <h5 className="text-left">ค้นหาเสื้อผ้า</h5>
                <div className="input-group mb-3">
                    <input type="text" className="form-control fixedFocus" placeholder="serach" aria-label="serach" aria-describedby="basic-addon2" onChange={this.HandleChangeTextInput} />
                </div>
                <div className="search" onClick={this.onHandleSearch} onKeyDown={this.onPressed}
                >
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataProduct: state.dataProduct,
        UserSearch: state.UserSearch
    }
}
const mapDispatchToProps = disptach => {
    return {
        getSearch: (search) => {
            disptach({
                type: "Searching",
                payload: search
            })
        },
        getTextSearch: (text) => {
            disptach({
                type: "InputSearch",
                payload: text
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
