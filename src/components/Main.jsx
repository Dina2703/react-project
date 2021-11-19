import { Component } from "react";
import NavBar from './Navbar';
import Footer from './Footer';
import Home from "./Home";
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  render() { 
    const HomePage =() => {
      return (
        <Home />
      );
    }

    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/home' component={ HomePage } />

          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;