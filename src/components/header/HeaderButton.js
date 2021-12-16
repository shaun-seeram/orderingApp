import classes from "./HeaderButton.module.css";
import CartContext from "../../store/cartContext";
import { useContext } from "react";

const HeaderButton = ({setCart}) => {

    const ctx = useContext(CartContext)

    return (
        <button onClick={() => setCart(true)} className={classes.headerButton}>
            <i className="fas fa-coffee"></i>
            <div className={classes.cartNumberContainer}>
                <p>{ctx.totalItems}</p>
            </div>
        </button>
    )
}

export default HeaderButton