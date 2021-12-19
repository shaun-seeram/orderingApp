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

        if (action.id === "INCREASE") {
            const newCart = [...state.cart]
            newCart[action.index] = action.action

            return {
                cart: newCart,
                totalItems: state.totalItems,
                totalAmount: state.totalAmount,
            }
        }

        if (action.id === "DECREASE") {

            const newCart = [...state.cart]

            if (action.action.quantity === 0) {
                newCart.splice(action.index, 1)
            } else {
                newCart[action.index] = action.action
            }

            return {
                cart: newCart,
                totalItems: state.totalItems,
                totalAmount: state.totalAmount,
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

    const increaseCart = (id) => {
        const item = cartState.cart.findIndex((item) => {
            return item.id === id;
        })

        const copiedItem = {...cartState.cart[item]}

        copiedItem.quantity = +copiedItem.quantity + 1
        copiedItem.price = (+copiedItem.price + +copiedItem.originalPrice).toFixed(2)

        cartDispatch({
            id: "INCREASE",
            index: item,
            action: copiedItem
        })
    }

    const decreaseCart = (id) => {
        const item = cartState.cart.findIndex((item) => {
            return item.id === id;
        })

        const copiedItem = {...cartState.cart[item]}

        copiedItem.quantity = +copiedItem.quantity - 1
        copiedItem.price = (+copiedItem.price - +copiedItem.originalPrice).toFixed(2)

        cartDispatch({
            id: "DECREASE",
            index: item,
            action: copiedItem
        })
    }

    const passedContext = {
        cart: cartState.cart,
        totalItems: cartState.cart.reduce((prev, item) => {
            return +prev + +item.quantity
        }, 0),
        totalAmount: cartState.cart.reduce((prev, item) => {
            return prev + item.price
        }, 0),
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