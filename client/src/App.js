import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavbarMenu from './components/Navbar';
import ShoppingList from './components/ShoppingList';
import AddItem from './components/AddItem';
import { Container } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Container>
        <AddItem/>
        <ShoppingList/>
      </Container>
    </div>
  );
}

export default App;
