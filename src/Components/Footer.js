import React, { Component } from 'react';
import facebook from '../Assets/images/logo/facebook.png';
import line from '../Assets/images/logo/line.png';
import ig from '../Assets/images/logo/ig.png';
class Footer extends Component {
    render() {
        return (
            <div className="container-fluid  Footer">
                <div className="row  text-white ">
                    <div className="col-6 left-footer">
                        <span className="text-footer">&copy; <b>2019 Nattraphak.com</b></span>
                    </div>
                    <div className="col-6 right-footer ">
                        <div className="container-fluid text-right ">
                            <div className="row">
                                <div className="col-lg-7 text-footer  col-12">
                                    <b>#Nattraphak.com</b>
                                </div>
                                <div className="col-lg-1 col-md-8 col-sm-6  col-4">
                                    <a className="" href="https://www.facebook.com">
                                        <img src={facebook} alt="" width="35px" />
                                    </a>
                                </div>
                                <div className="col-lg-1 col-md-2 col-sm-3  col-4">
                                    <a className="" href="https://www.facebook.com">
                                        <img src={ig} alt="" width="35px" />
                                    </a>
                                </div>
                                <div className="col-lg-1 col-md-2 col-sm-3  col-4">
                                    <a className="" href="https://www.facebook.com">
                                        <img src={line} alt="" width="35px" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;
