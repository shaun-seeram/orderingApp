import { useContext } from "react"
import CartContext from "../../store/cartContext"
import classes from "./Cart.module.css";

const Cart = ({setCart}) => {

    const ctx = useContext(CartContext)

    const stop = (e) => {
        e.stopPropagation()
    }

    return (
        <div onClick={() => setCart(false)} className={classes.backdrop}>
            <ul className={classes.box} onClick={(e) => stop(e)}>
                <h2 className={classes.cartTitle}>Cart</h2>
                {ctx.cart.map((item) => {
                    return (
                        <li>
                            <ul className={classes.itemList}>
                                <li className={classes.flex}>{item.size} {item.name} <span>{item.calories} cal/ea</span></li>

                                {Object.keys(item).map((key) => {
                                    if (key === "name" || key === "id" || key === "originalPrice" || key === "size" || key === "price" || key === "calories" || key === "quantity") {
                                        return
                                    }

                                    return (
                                        <li className={classes.indent}> - {item[key]}x {key}</li>
                                    )

                                })}

                                <li className={`${classes.flex} ${classes.line}`}><span>Item Total</span> {item.price}</li>
                                <li className={classes.quantityRow}><button className={classes.innerButton} onClick={() => ctx.decreaseCart(item.id)}>-</button> Quantity: {item.quantity} <button className={classes.innerButton} onClick={() => ctx.increaseCart(item.id)}>+</button></li>
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Cart;