import { useEffect, useState } from "react";
import classes from "./AddToCart.module.css"

const AddToCart = ({item, price}) => {

    const [quantity, setQuantity] = useState(1);

    const setQuantityHandler = (e) => {
        setQuantity(+e.target.value)
    }

    useEffect(() => {
        setQuantity(1)
    }, [item])

    return (
        <div className={classes.flex}>
            <button type="submit" className={classes.addOrder}>Add to Order - ${(price * quantity).toFixed(2)}</button>
            <label htmlFor="quantity" className="sr-only">Quantity</label>
            <input onChange={setQuantityHandler} type="number" id="quantity" value={quantity} min="1" max="10" />
        </div>
    )
}

export default AddToCart;