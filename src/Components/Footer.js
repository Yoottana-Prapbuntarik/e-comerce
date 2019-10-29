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
                        #Nattraphak.com                       
                        <a className="ml-2" href="https://www.facebook.com">
                         <img  src={facebook} alt="" width="30px" />
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="ml-2"  href="https://www.facebook.com">
                         <img src={ig} alt="" width="30px" />
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="ml-2"  href="https://www.facebook.com">
                         <img src={line} alt="" width="30px" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;
