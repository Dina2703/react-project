import { Component } from "react";
import NavBar from './Navbar';
import Body from './Body';
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

    const BodyPage = () => {
      return (
        <Body />
      );
    }
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/home' component={ HomePage } />
          <Route exact path='/body' component={ BodyPage } />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;