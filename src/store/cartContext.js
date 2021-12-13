import React from "react";

const CartContext = React.createContext({
    cart: [],
    totalItems: 0,
    totalAmount: 0,
    addToCart: () => {},
    increaseCart: () => {},
    decreaseCart: () => {}
})

export default CartContext