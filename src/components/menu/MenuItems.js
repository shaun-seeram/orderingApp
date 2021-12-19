import classes from "./MenuItems.module.css";
import menuList from "../../store/menuList";

const MenuItems = (props) => {

    const setItemHandler = (selectedItem) => {

        const index = menuList[props.categoryIndex].items.findIndex((item) => {
            return item.title === selectedItem.title;
        })

        props.setItem(index)
    }

    return (
        <div className={classes.menuItems}>
            {menuList[props.categoryIndex].items.map((item) => {
                return (
                    <div onClick={() => setItemHandler(item)} key={item.id}>
                        <img src={item.image} alt={`An image of a ${item.title}`} />
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MenuItems