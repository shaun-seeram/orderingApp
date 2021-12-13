import { useContext } from "react"
import CartContext from "../../store/cartContext"

const Cart = () => {

    const ctx = useContext(CartContext)

    return (
        <ul>
            {ctx.cart.map((item) => {
                return (
                    <li>{item.name}</li>
                )
            })}
        </ul>
    )
}

export default Cart;