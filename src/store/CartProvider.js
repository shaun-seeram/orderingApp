import { useReducer } from "react"
import CartContext from "./cartContext"

const CartProvider = (props) => {
    
    const defaultCart = {
        cart: [],
        totalItems: 0,
        totalAmount: 0
    }

    
    const cartReducer = (state, action) => {

        if (action.id === "ADDTOCART") {
            const newCart = [...state.cart, action.action]
            return {
                cart: newCart,
                totalItems: newCart.reduce((curr, item) => {
                    return curr + +item.quantity
                }, 0),
                totalAmount: newCart.reduce((curr, item) => {
                    return curr + (+item.quantity * +item.price)
                }, 0),
            }
        }
        
        return defaultCart
        
    }

    const [cartState, cartDispatch] = useReducer(cartReducer, defaultCart)

    const addToCart = (item) => {

        const updatedItem = {...item, price: (item.price * item.quantity).toFixed(2)}

        cartDispatch({
            id: "ADDTOCART",
            action: updatedItem
        })
    }

    const increaseCart = () => {

    }

    const decreaseCart = () => {

    }

    const passedContext = {
        cart: cartState.cart,
        totalItems: cartState.totalItems,
        totalAmount: cartState.totalAmount,
        addToCart: addToCart,
        increaseCart: increaseCart,
        decreaseCart: decreaseCart
    }

    return (
        <CartContext.Provider value={passedContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider