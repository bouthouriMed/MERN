import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavbarMenu from './components/Navbar';
import ShoppingList from './components/ShoppingList';
import AddItem from './components/AddItem';
import { Container } from 'reactstrap';
import Loader from './components/Loader';


function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Container>
        <AddItem/>
        <ShoppingList/>
        <Loader/>
      </Container>
      
    </div>
  );
}

export default App;
