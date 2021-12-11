import {useState} from "react";
import './App.css';
import Header from "./components/header/Header"
import IndividualItem from "./components/menu/IndividualItem";
import Menu from './components/menu/Menu';
import MenuItems from './components/menu/MenuItems';

function App() {

  const [display, setDisplay] = useState({
    category: null,
    item: null
  })

  const setCategoryHandler = (category) => {
    setDisplay({
      category: category,
      item: null
    })
  }

  const setItemHandler = (item) => {
    setDisplay({
      ...display,
      item: item
    })
  }

  return (
    <>
      <Header />
      <main className="wrapper2">
        <Menu setCategory={setCategoryHandler}/>
        {display.category !== null && <MenuItems categoryIndex={display.category} setItem={setItemHandler} />}
        {display.item !== null && <IndividualItem categoryIndex={display.category} itemIndex={display.item} />}
      </main>
    </>
  );
}

export default App;
