import React, { Component } from 'react'
import Navbar from './Components/NavigationBar';
import NotFound from './Pages/NotFound';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import ResultsSearch from './Pages/ResultsSearch';
import Promotion from './Pages/Promotion';
import News from './Pages/News';
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
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Product" component={Product} />
              <Route path="/News" component={News} />
              <Route path="/Promotion" component={Promotion} />
              <Route path="/ResultsSearch" component={ResultsSearch} />
              {/* <Route  path="/ProductDetail" component={ProductDetail} /> */}
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
        {console.log(this.state.valueScroll)}
        {
          this.state.valueScroll >= 720 &&
        <Footer/>
        }
      </div >
    )
  }
}

export default App
