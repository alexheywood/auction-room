import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Image from './Image';
import Description from './Description';
import LikeButton from './LikeButton';
import BidHistory from './BidHistory';
import Item from './Item';
import {items} from './items';
import NavBar from './NavBar';


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
