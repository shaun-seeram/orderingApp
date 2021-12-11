import classes from "./MenuCategory.module.css";
import menuList from "../../store/menuList";

const MenuCategory = (props) => {

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