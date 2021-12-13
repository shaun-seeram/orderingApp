import { useState } from "react";
import classes from "./NumberInput.module.css";

const NumberInput = ({type, view}) => {

    const [value, setValue] = useState(0);

    return (
        <div className={classes.formRow}>
            <div>
                <label htmlFor={type.id}>{type.id}</label>
                <p className={classes.calories}>{type.calories} Cal</p>
            </div>
            <input onChange={(e) => {setValue(e.target.value)}} type="number" id={type.id} value={value} min="0" max="5" />
        </div>
    )
}

export default NumberInput