import React, { Component } from 'react';
import CardBox from '../Components/CardBox';
import { connect } from 'react-redux';
class ResultsSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,
        }
        this.HandlePage = this.HandlePage.bind(this);
    }
    HandlePage(e) {
        this.setState({ index: parseInt(e.target.value) })
    }
    onclick(type) {
        this.setState(prevState => {
            return { index: type === 'add' ? prevState.index + 1 : prevState.index - 1 }
        });
    }

    render() {
        let pagination = [];
        let NumberPage;
        for (let i = 16; i < 96; i++) {
            if (i % 16 === 0) {
                NumberPage = i / 16;
                pagination.push(
                    <li className="page-item ml-2 ">
                        <button className="page-link border-page-link  text-dark" value={NumberPage} onClick={this.HandlePage}>{NumberPage}</button>
                    </li>);
            }
        }
        return (
            <React.Fragment>
                <div className="container-fluid MarginTopClassII">
                    <div className="row">
                        <div className="col-12 MarginTopClass text-center">
                            <h5>
                                {this.props.UserSearch !== '' ?

                                    (<b>ผลลัพธ์การค้นหา "{this.props.UserSearch}"</b>) : ("ผลลัพธ์การค้นหา")
                                }
                            </h5>
                        </div>
                        {
                            this.props.itemsSearch.map(datas => {
                                return (
                                    this.state.index === 1 ? (datas.map((list, i) => {
                                        return (
                                            list.id <= 16 &&
                                            <CardBox key={i} img={list.img[0].source} id={list.id} name={list.name} cost={list.cost} />
                                        )
                                    })

                                    ) : this.state.index === 2 ? (datas.map((list, i) => {
                                        return (
                                            list.id > 16 && list.id <= 32 && 
                                            <CardBox key={i} img={list.img[0].source} id={list.id} name={list.name} cost={list.cost} />
                                        )
                                    })) : this.state.index === 3 ? (this.state.dataItem.map((list, i) => {
                                        return (
                                            list.id <= 64 && list.id > 16 &&
                                            <CardBox key={i} img={list.img[0].source} id={list.id} name={list.name} cost={list.cost} />
                                        )
                                    })) : this.state.index === 4 ? (this.state.dataItem.map((list, i) => {
                                        return (
                                            list.id > 64 && list.id <= 128 &&
                                            <CardBox key={i} img={list.img[0].source} id={list.id} name={list.name} cost={list.cost} />
                                        )
                                    })) : (datas.map((list, i) => {
                                        return (
                                            list.id > 128 && list.id <= 256 &&
                                            <CardBox key={i} img={list.img[0].source} id={list.id} name={list.name} cost={list.cost} />
                                        )
                                    }))
                                )

                            })}

                    </div >
                </div >
                <div className="container-fluid buttonGroup">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                    <li className="page-item ml-2">
                                        <button className="page-link text-dark border-page-link" href="#" aria-label="Previous" onClick={this.onclick.bind(this, 'subTack')}>
                                            <span aria-hidden="true">{"<"}</span>
                                        </button>
                                    </li>
                                    {pagination}
                                    <li className="page-item ml-2">
                                        <button className="page-link border-page-link text-dark" href="#" aria-label="Next" onClick={this.onclick.bind(this, 'add')}>
                                            <span aria-hidden="true">{">"}</span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        itemsSearch: state.itemsSearch,
        UserSearch: state.UserSearch
    }
}

export default connect(mapStateToProps)(ResultsSearch);
