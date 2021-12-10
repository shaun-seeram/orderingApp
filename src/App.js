import {useState} from "react";

import './App.css';
import Header from "./components/header/Header"
import IndividualItem from "./components/menu/IndividualItem";
import Menu from './components/menu/Menu';
import MenuItems from './components/menu/MenuItems';
import menuList from "./store/menuList";

function App() {

  const [category, setCategory] = useState(null);
  const [item, setItem] = useState(null);

  const setCategoryHandler = (category) => {
    setCategory(category);
    setItem(null);
  }

  const setItemHandler = (item) => {
    setItem(item);
  }

  return (
    <>
      <Header />
      <main className="wrapper2">
        <Menu setCategory={setCategoryHandler}/>
        {category && <MenuItems category={category} setItem={setItemHandler} />}
        {item && <IndividualItem item={item} />}
      </main>
    </>
  );
}

export default App;
