import classes from "./HeaderButton.module.css";

const HeaderButton = () => {
    return (
        <button className={classes.headerButton}>
            <i className="fas fa-coffee"></i>
            <div className={classes.cartNumberContainer}>
                <p>10</p>
            </div>
        </button>
    )
}

export default HeaderButton