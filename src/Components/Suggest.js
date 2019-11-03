import React, { Component } from 'react'
import axios from 'axios';
import CardBox from './CardBox';
class Suggest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataItem: [],
            mounted: true
        }
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
                <div className="col-12 text-left">
                    <div className="row">
                        <div className="col-12">
                            <p className="headingDetailText">สินค้าเเนะนำ</p>
                        </div>
                    </div>
                        <div className="row">
                            {this.state.dataItem.map((list, i) => {
                                return <CardBox key={i} img={list.img[0].source} id={list.id} name={list.name} cost={list.cost} />
                            })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Suggest
