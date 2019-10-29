import React, { Component } from 'react';
import Slider from '../Components/Slider';
import Category from '../Components/CategoryBox';
import CardBox from '../Components/CardBox';
import { connect } from 'react-redux';
import axios from 'axios';
class Home extends Component {
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

    componentDidMount() {
        axios.get('http://www.mocky.io/v2/5db7df793b0000530035eca6').then((datas) => {
            this.props.getApi(datas.data.items);
        })
        // axios.get('http://www.mocky.io/v2/5db45d24300000540057b781').then((datas) => {
        //     this.props.getApi(datas.data.items);
        // })
    }

    render() {
        return (
            <React.Fragment>
                <Slider />
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

                        {this.props.dataProduct.map(datas => {
                            return (
                                this.state.index === 1 ? (datas.map((list, i) => {
                                    return (
                                        i <= 16 &&
                                        <CardBox key={i} img={list.img[0].image} name={list.name} cost={list.cost} />
                                    )
                                })

                                ) : this.state.index === 2 ? (datas.map((list, i) => {
                                    return (
                                        i <= 32 && i > 16 &&
                                        <CardBox key={i} img={list.img[0].image} name={list.name} cost={list.cost} />
                                    )
                                })) : this.state.index === 3 ? (datas.map((list, i) => {
                                    return (
                                        i <= 64 && i > 16 &&
                                        <CardBox key={i} img={list.img[0].image} name={list.name} cost={list.cost} />
                                    )
                                })) : this.state.index === 4 ? (datas.map((list, i) => {
                                    return (
                                        i <= 128 && i > 64 &&
                                        <CardBox key={i} img={list.img[0].image} name={list.name} cost={list.cost} />
                                    )
                                })) : (datas.map((list, i) => {
                                    return (
                                        i <= 256 && i > 64 &&
                                        <CardBox key={i} img={list.img[0].image} name={list.name} cost={list.cost} />
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
const mapStateToProps = (state) => {
    return {
        dataProduct: state.dataProduct,
    }
}
const mapDispatchToProps = disptach => {
    return {
        getApi: (datasApi) => {
            disptach({
                type: "Get-Api",
                payload: datasApi
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
