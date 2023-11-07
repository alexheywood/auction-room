import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Item from './components/Item';
import {items} from './items';
import NavBar from './components/NavBar';
import NavButton from './components/NavButton';
import { useState } from 'react';


function App() {

  
  const [itemNumber, setItemNumber] = useState(0);


  const handlePrev = () =>
  {
    
    if (itemNumber == 0) {
      return;
    }
    else {
      setItemNumber(itemNumber - 1);
    }

  }

  const handleNext = () =>
  {
    if (itemNumber >= (items.length -1)) {
      return;
    }
    else {
      setItemNumber(itemNumber + 1);
    }
  }

  return (
    <>
    <NavBar />
    
    <div className="App">
    <div id="buttonSection" className="flex-container">
        <NavButton 
        onClick={handlePrev} 
        label="Previous" />
        <NavButton 
        onClick={handleNext} 
        label="Next"/>
      </div>
        <Item itemObject={items[itemNumber]} />
</div>
    </>
  );
}

export default App;
