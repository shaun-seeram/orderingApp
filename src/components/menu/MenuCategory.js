import classes from "./MenuCategory.module.css";
import menuList from "../../store/menuList";

const MenuCategory = (props) => {

    // on click of the category button, find the index of the item from the menuList object and send data back to App component

    const setCategoryHandler = () => {

        const index = menuList.findIndex((item) => {
            return item.title === props.title;
        })

        props.setCategory(index)
    }

    return (
        <button onClick={setCategoryHandler} className={classes.button}>
            {props.title}
        </button>
    )
}

export default MenuCategory