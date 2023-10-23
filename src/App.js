import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Item from './components/Item';
import {items} from './items';
import NavBar from './components/NavBar';


function App() {

  return (
    <>
    <NavBar />
    <div className="App">
      {items.map((item) => (
        <Item itemObject = {item} />
      ))}
    </div>
    </>
  );
}

export default App;
