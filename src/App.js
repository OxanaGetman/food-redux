import React from 'react';
import './App.css';
import Dishes from './app/Components/DishesComponent/Dishes';
import AllCategories from './app/Components/Filter/AllCategories';
import Cart from './app/Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <div className="block">
        <AllCategories />
        <Cart />
      </div>
      <div className="block">
        <Dishes />
      </div>
    </div>
  );
}

export default App;
