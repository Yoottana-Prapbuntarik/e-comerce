import React, { Component } from 'react'
import Navbar from './Components/NavigationBar';
import NotFound from './Pages/NotFound';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
              <Footer/>
          </div>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App
