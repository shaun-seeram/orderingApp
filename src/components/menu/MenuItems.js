import classes from "./MenuItems.module.css";
import menuList from "../../store/menuList";

const MenuItems = (props) => {

    const index = menuList.findIndex((item) => {
        return item.title === props.category
    })

    return (
        <div className={classes.menuItems}>
            {menuList[index].items.map((item) => {
                return (
                    <div onClick={() => props.setItem(item)} key={item.id}>
                        <img src={item.image} alt="test" />
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MenuItems