import classes from "./Menu.module.css";
import menuList from "../../store/menuList";
import MenuCategory from "./MenuCategory";

const Menu = (props) => {
    return (
        <div className={classes.menu}>
            {
                menuList.map((item) => {
                    return (
                        <MenuCategory key={item.id} title={item.title} setCategory={props.setCategory} />
                    )
                })
            }
        </div>
    )
}

export default Menu