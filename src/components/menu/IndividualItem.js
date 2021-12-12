import { useEffect, useState } from "react";
import classes from "./IndividualItem.module.css";
import menuList from "../../store/menuList";
import AddOnList from "./AddOnList";
import ValueInput from "./ValueInput";
import AddToCart from "./AddToCart";

const IndividualItem = (props) => {

    const [size, setSize] = useState("Small");
    const [sizeIndex, setSizeIndex] = useState(0);

    const item = menuList[props.categoryIndex].items[props.itemIndex];

    useEffect(() => {
        const index = item.sizes.findIndex((item) => {
            return item.size === size;
        })

        setSizeIndex(index);
    }, [size])

    const submit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className={classes.individualItem}>
            <img src={item.image} alt="" />
            <div className={classes.wrapper}>
                <div className={classes.title}>
                    <p>{item.title}</p>
                    <ul className={classes.titleList}>
                        <li className={classes.price}>${item.sizes[sizeIndex].price}</li>
                        <li>{item.sizes[sizeIndex].calories} Cal</li>
                    </ul>
                </div>
                <form onSubmit={submit} className={classes.dropdown}>
                    <ValueInput item={item} setSize={setSize} />
                    <AddOnList />
                    <AddToCart price={item.sizes[sizeIndex].price} />
                </form>
            </div>
        </div>
    )
}

export default IndividualItem