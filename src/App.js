import React, { Component } from 'react'
import Navbar from './Components/NavigationBar';
import NotFound from './Pages/NotFound';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Footer from './Components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: '',
      valueScroll: 0
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
      valueScroll: window.scrollY
    })
  }

  render() {

    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Product" component={Product} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
        {
          this.state.valueScroll >= 1500 &&
          <Footer />
        }
      </div >
    )
  }
}

export default App
