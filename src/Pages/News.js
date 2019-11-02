import React, { Component } from 'react';
import Banner from '../Components/Banner';
import axios from 'axios';
import CardBox from '../Components/CardBox';
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,
            dataItem: [],
            mounted: true
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
    componentDidMount() {
        if (this.state.mounted) {
            axios.get('http://www.mocky.io/v2/5db946cd30000040765ee168').then((res) => {
                this.setState({
                    dataItem: res.data.items
                })
            })
        }
    }
    componentWillUnmount() {
        this.setState({
            mounted: false,
            dataItem: []
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                        <Banner images={"https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"} text={"News"} alt="image banner"/>
                        </div>
                <div className="container-fluid">
                <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="HeaderCard text-left ml-3">
                                สินค้าใหม่
                            </h2>
                        </div>
                        {
                            this.state.index === 1 ? (this.state.dataItem.map((list, i) => {
                                return (
                                    list.id <= 16 &&
                                    <CardBox key={i} img={list.img[0].source} id={list.id} name={list.name} cost={list.cost} />
                                )
                            })

                            ) : this.state.index === 2 ? (this.state.dataItem.map((list, i) => {
                                return (
                                    list.id > 16 && list.id <= 32 &&
                                    <CardBox key={i} img={list.img[0].source} id={list.id} name={list.name} cost={list.cost} />
                                )
                            })) : this.state.index === 3 ? (this.state.dataItem.map((list, i) => {
                                return (
                                    list.id > 32 && list.id <= 64 &&
                                    <CardBox key={i} img={list.img[0].source} id={list.id} name={list.name} cost={list.cost} />
                                )
                            })) : this.state.index === 4 ? (this.state.dataItem.map((list, i) => {
                                return (
                                    list.id > 64 && list.id <= 128 &&
                                    <CardBox key={i} img={list.img[0].source} id={list.id} name={list.name} cost={list.cost} />
                                )
                            })) : (this.state.dataItem.map((list, i) => {
                                return (
                                    list.id > 128 && list.id <= 256 &&
                                    <CardBox key={i} img={list.img[0].source} id={list.id} name={list.name} cost={list.cost} />
                                )
                            }))
                        }

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
                                    <li className="page-item ml-2 ">
                                        <button className="page-link border-page-link  text-dark" value={1} onClick={this.HandlePage}>1</button></li>
                                    <li className="page-item ml-2">
                                        <button className="page-link border-page-link  text-dark" value={2} onClick={this.HandlePage}>2</button>
                                    </li>
                                    <li className="page-item ml-2">
                                        <button className="page-link border-page-link  text-dark" value={3} onClick={this.HandlePage}>3</button>
                                    </li>
                                    <li className="page-item ml-2">
                                        <button className="page-link border-page-link  text-dark" value={4} onClick={this.HandlePage}>4</button>
                                    </li>
                                    <li className="page-item ml-2">
                                        <button className="page-link border-page-link  text-dark" value={5} onClick={this.HandlePage}>5</button>
                                    </li>
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
        )
    }
}

export default News
