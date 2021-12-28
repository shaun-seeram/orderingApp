import { useEffect, useRef } from "react"
import classes from "./ValueInput.module.css"

const ValueInput = ({item, setSize, label}) => {

    const ref = useRef()

    useEffect(() => {
        setSize(ref.current.value)
    }, [item]);

    const setSizeHandler = (e) => {
        setSize(e.target.value)
    }

    return (
        <div className={classes.formRow}>
            <label htmlFor="sizes">{label}</label>
            <select ref={ref} onChange={setSizeHandler} id="sizes">
                {item[item.sizes ? "sizes" : "flavors"].map((size) => {
                    return (
                        <option key={size.size} value={size.size}>{size.size}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default ValueInput