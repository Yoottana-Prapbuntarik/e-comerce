import React, { Component } from 'react'
import Navbar from './Components/NavigationBar';
import NotFound from './Pages/NotFound';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Home from './Pages/Home';

 class App extends Component {
  render() {
    return (
<BrowserRouter>
        <div>
          {/* It's app js used it for route path */}
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/Product" component={Home} /> */}
            {/* <Route path="/ProductDetail/:id" component={Home} /> */}
            <Route component={NotFound} />
          </Switch>
          </div>
      </BrowserRouter>
      )
  }
}

export default App
