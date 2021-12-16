import { useReducer, useEffect, useState, useContext } from "react";
import classes from "./IndividualItem.module.css";
import menuList from "../../store/menuList";
import AddOnList from "./AddOnList";
import ValueInput from "./ValueInput";
import AddToCart from "./AddToCart";
import CartContext from "../../store/cartContext";

const IndividualItem = (props) => {

    const ctx = useContext(CartContext)

    const item = menuList[props.categoryIndex].items[props.itemIndex];

    const [size, setSize] = useState("Small");
    const [sizeIndex, setSizeIndex] = useState(0);

    useEffect(() => {
        const index = item.sizes.findIndex((item) => {
            return item.size === size;
        })

        setSizeIndex(index);

    }, [size])

    useEffect(() => {
        document.getElementById("customizationForm").reset()
    }, [props.itemIndex])

    const submit = (e) => {
        e.preventDefault()

        let test = {
            name: item.title,
            size: size,
            price: item.sizes[sizeIndex].price,
            calories: item.sizes[sizeIndex].calories
        }

        document.querySelectorAll("input").forEach((node) => {
            if (node.value > 0) {
                test[node.id] = node.value
            }
        })

        ctx.addToCart(test)

        console.log(ctx.cart)

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
                <form onSubmit={submit} id="customizationForm" className={classes.dropdown}>
                    <ValueInput item={item} setSize={setSize} />
                    <AddOnList item={props.itemIndex} />
                    <AddToCart item={props.itemIndex} price={item.sizes[sizeIndex].price} />
                </form>
            </div>
        </div>
    )
}

export default IndividualItem