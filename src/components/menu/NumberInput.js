import classes from "./NumberInput.module.css";

const NumberInput = ({type}) => {

    return (
        <div className={classes.formRow}>
            <label htmlFor={type.id}>{type.id}</label>
            <input type="number" id={type.id} defaultValue="0" min="0" max="5" />
        </div>
    )
}

export default NumberInput