import { useEffect, useState, useContext } from "react";
import classes from "./IndividualItem.module.css";
import menuList from "../../store/menuList";
import AddOnList from "./AddOnList";
import ValueInput from "./ui/ValueInput";
import AddToCart from "./AddToCart";
import CartContext from "../../store/cartContext";

const IndividualItem = (props) => {

    const ctx = useContext(CartContext)

    const item = menuList[props.categoryIndex].items[props.itemIndex];

    const [size, setSize] = useState("Small");
    const [sizeIndex, setSizeIndex] = useState(0);
    const [wait, setWait] = useState(false);

    useEffect(() => {
        if (wait) {

            const index = item.sizes.findIndex((item) => {
                return item.size === size;
            })
    
            setSizeIndex(index);

        } else {
            setWait(true)
        }

    }, [size])

    useEffect(() => {
        document.getElementById("customizationForm").reset()
    }, [props.itemIndex])

    const submit = (e) => {
        e.preventDefault()

        let cartedItem = {
            id: (Math.random() * 100) + Math.random(),
            name: item.title,
            size: size,
            originalPrice: item.sizes[sizeIndex].price,
            price: item.sizes[sizeIndex].price,
            calories: item.sizes[sizeIndex].calories
        }

        document.querySelectorAll("input").forEach((node) => {
            if (node.value > 0) {
                cartedItem[node.id] = node.value
            }
        })

        ctx.addToCart(cartedItem)
    }

    return (
        <div className={classes.individualItem}>
            <img src={item.image} alt={`An image of ${item.title}`} />
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