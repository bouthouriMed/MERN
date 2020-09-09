import React, { Component } from "react";
import { connect } from "react-redux";
import AddItem from "./AddItem";
import NavbarMenu from "./Navbar";
import ShoppingList from "./ShoppingList";
import Loader from "./Loader";
import {loadUser} from '../actions/authActions'

class Home extends Component {



  render() {
    return (
      <div>
        <div className="home-page">
          <NavbarMenu />
          <AddItem />
          <ShoppingList />
          <Loader />
        </div>
      </div>
    );
  }
}



export default connect(null, { loadUser })(Home);
