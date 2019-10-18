import React, { Component } from 'react';
import Slider from '../Components/Slider';
import Category from '../Components/CategoryBox';
import Card from '../Components/CardBox';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Slider />
                <div className="container-fluid MarginTopClass">
                    <div className="row text-center">
                        <Category />
                    </div>
                    <div className="row">
                        <div className="col-12 MarginTopClass text-center">
                            <h2 className="HeaderCard">
                                เสื้อผ้าเเนะนำสำหรับคุณ. 
                            </h2>
                        </div>
                        <Card  images={"https://images.unsplash.com/photo-1416339698674-4f118dd3388b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"} altText={"Banner goes here"}/>
                        <Card  images={"https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} altText={"Banner goes here"}/>
                        <Card  images={"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} altText={"Banner goes here"}/>
                        <Card  images={"https://images.unsplash.com/photo-1469692422776-14abcfa4b525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} altText={"Banner goes here"}/>
                        <Card  images={"https://images.unsplash.com/photo-1416339698674-4f118dd3388b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"} altText={"Banner goes here"}/>
                        <Card  images={"https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} altText={"Banner goes here"}/>
                        <Card  images={"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} altText={"Banner goes here"}/>
                        <Card  images={"https://images.unsplash.com/photo-1469692422776-14abcfa4b525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} altText={"Banner goes here"}/>
                     
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
