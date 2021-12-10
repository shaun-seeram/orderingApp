import classes from "./MenuCategory.module.css";

const MenuCategory = (props) => {

    const setCategoryHandler = () => {
        props.setCategory(props.title)
    }

    return (
        <button onClick={setCategoryHandler} className={classes.button}>
            {props.title}
        </button>
    )
}

export default MenuCategory