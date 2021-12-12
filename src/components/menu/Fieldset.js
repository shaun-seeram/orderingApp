import { useState } from "react";
import NumberInput from "./NumberInput";
import "./Fieldset.module.css";

const Fieldset = ({addon}) => {

    const [view, setView] = useState(false);

    const viewHandler = () => {
        setView((prevState) => {
            return !prevState
        })
    }

    return (
        <fieldset>
            <legend onClick={viewHandler}>
                <p>{addon.id}</p>
                <p>+</p>
            </legend>
            {view && addon.types.map((type) => {
                return (
                    <NumberInput key={type.id} type={type} />
                )
            })}
        </fieldset>
    )
}

export default Fieldset