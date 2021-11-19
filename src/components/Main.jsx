import { Component } from "react";
import NavBar from './Navbar';
import Body from './Body';
import Footer from './Footer';

class Main extends Component {
  render() { 
    return (
      <div>
        <NavBar />
        <Body />
        <Footer />
      </div>
    );
  }
}
export default Main;