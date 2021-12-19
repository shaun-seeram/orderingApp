import {useState} from "react";
import './App.css';
import Header from "./components/header/Header"
import Cart from "./components/cart/Cart";
import IndividualItem from "./components/menu/IndividualItem";
import Menu from './components/menu/Menu';
import MenuItems from './components/menu/MenuItems';
import CartProvider from "./store/CartProvider";

function App() {

  // Determines whether cart is shown or not
  const [viewCart, setViewCart] = useState(false);

  // Determines which sections are shown in the main section
  const [display, setDisplay] = useState({
    category: null,
    item: null
  })

  // Sets both category and item, for the above
  const setCategoryHandler = (category) => {
    setDisplay({
      category: category,
      item: null
    })
  }

  const setItemHandler = (item) => {
    setDisplay((prevValue) => {
      return {
        ...prevValue,
        item: item
      }
    })
  }

  return (
    <CartProvider>
      {viewCart && <Cart setCart={setViewCart}/>}
      <Header setCart={setViewCart}/>
      <main className="wrapper2">
        <Menu setCategory={setCategoryHandler}/>
        {display.category !== null && <MenuItems categoryIndex={display.category} setItem={setItemHandler} />}
        {display.item !== null && <IndividualItem categoryIndex={display.category} itemIndex={display.item} />}
      </main>
    </CartProvider>
  );
}

export default App;
