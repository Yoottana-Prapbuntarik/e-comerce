import React, { Component } from 'react'
import Navbar from './Components/NavigationBar';
import NotFound from './Pages/NotFound';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import ResultsSearch from './Pages/ResultsSearch';
import ProductDetail from './Pages/ProductDetail';
import Promotion from './Pages/Promotion';
import Confirm from './Pages/Confirm';
import News from './Pages/News';
import Mycart from './Pages/Mycart';
import Address from './Pages/Address';
import Booking from './Pages/Booking';
import Member from './Pages/Member';
import ConfirmPayment from './Pages/ConfirmPayment';
import PurchaseLog from './Pages/PurchaseLog';
import Purchase from './Pages/Purchase';
import Profile from './Pages/Profile';
import Footer from './Components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: '',
      valueScroll: 0,
    }
    this.handleScroll = this.handleScroll.bind(this);

  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({
        scrolling: false
      });
    }
    else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({ scrolling: true });
    }
    this.setState({
      valueScroll: window.scrollY / 3 - 60
    })
  }

  render() {

    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar detectScroll={this.state.valueScroll}/>
            <Switch>
              {/* path in your website */}
              <Route exact path="/" component={Home} />
              <Route path="/Product" component={Product} />
              <Route path="/Mycart" component={Mycart} />
              <Route path="/News" component={News} />
              <Route path="/Promotion" component={Promotion} />
              <Route path="/ResultsSearch" component={ResultsSearch} />
              <Route  path="/ProductDetail/:id" component={ProductDetail} />
              <Route  path="/Address" component={Address} />
              <Route  path="/Confirm" component={Confirm} />
              <Route  path="/Booking" component={Booking} />
              <Route  path="/Member" component={Member} />
              <Route  path="/ConfirmPayment" component={ConfirmPayment} />
              <Route  path="/Purchase" component={Purchase} />
              <Route  path="/PurchaseLog" component={PurchaseLog} />
              <Route  path="/Profile" component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
        {
          this.state.valueScroll > 200 &&
        <Footer/>
        }
      </div >
    )
  }
}

export default App
