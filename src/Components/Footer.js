import React, { Component } from 'react';
import facebook from '../Assets/images/logo/facebook.png';
import line from '../Assets/images/logo/line.png';
import ig from '../Assets/images/logo/ig.png';
class Footer extends Component {
    render() {
        return (
            <div className="container-fluid  Footer">
                <div className="row text-center text-white ">
                    <div className="col-6 left-footer">
                        &copy; 2019 Nattraphak.com
                            </div>
                    <div className="col-6 right-footer">
                        <div className="container text-right">
                        <div className="row">
                            <div className="col-md-7 col-12">
                                #Nattraphak.com
                            </div>
                            <div className="col-md-1 col-6">
                                <a className="" href="https://www.facebook.com">
                                    <img src={facebook} alt="" width="30px" />
                                </a>
                            </div>
                            <div className="col-md-1 col-3">
                                <a className="" href="https://www.facebook.com">
                                    <img src={ig} alt="" width="30px" />
                                </a>
                            </div>
                            <div className="col-md-1 col-3">
                                <a className="" href="https://www.facebook.com">
                                    <img src={line} alt="" width="30px" />
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
