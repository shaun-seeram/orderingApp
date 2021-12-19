import classes from "./ValueInput.module.css"

const ValueInput = ({item, setSize}) => {

    const setSizeHandler = (e) => {
        setSize(e.target.value)
    }

    return (
        <div className={classes.formRow}>
            <label htmlFor="sizes">Size</label>
            <select onChange={setSizeHandler} id="sizes">
                {item.sizes.map((size) => {
                    return (
                        <option key={size.size} value={size.size}>{size.size}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default ValueInput