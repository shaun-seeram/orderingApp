import { useState } from "react";
import classes from "./AddToCart.module.css"

const AddToCart = ({price}) => {

    const [quantity, setQuantity] = useState(1);

    const setQuantityHandler = (e) => {
        setQuantity(+e.target.value)
    }

    return (
        <div className={classes.flex}>
            <button type="submit" className={classes.addOrder}>Add to Order - ${(price * quantity).toFixed(2)}</button>
            <label htmlFor="quantity" className="sr-only">Quantity</label>
            <input onChange={setQuantityHandler} type="number" id="quantity" defaultValue={quantity} max="10" />
        </div>
    )
}

export default AddToCart;