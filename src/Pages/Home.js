import React, { Component } from 'react';
import Slider from '../Components/Slider';
import Category from '../Components/CategoryBox';
import CardBox from '../Components/CardBox';
import axios from 'axios';
class Home extends Component {
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
        let items_banner = [
            {
                src:'https://images.unsplash.com/photo-1533452171465-a53bec7eb8e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
                altText:'Sale มากกว่า 50 %',
                caption:'Sale มากกว่า 50 %',
            },
            {
                src:'https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                altText:'Limited time offer',
                caption:'Limited time offer',
            },
            {
                src:'https://images.unsplash.com/reserve/wi9yf7kTQxCNeY72cCY6_Images%20of%20Jenny%20Lace%20Plasticity%20Publish%20(4%20of%2025).jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                altText:'Shop now !',
                caption:'Shop now !',
            },

        ]
        return (
            <React.Fragment>
                <Slider itemsImg={items_banner}/>
                <div className="container-fluid MarginTopClass ">
                    <div className="row text-center">
                        <Category />
                    </div>
                    <div className="row">
                        <div className="col-12 MarginTopClass text-center">
                            <h2 className="HeaderCard">
                                เสื้อผ้าเเนะนำสำหรับคุณ.
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
        );
    }
}

export default Home;
