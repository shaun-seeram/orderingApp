import { useEffect, useState } from "react";
import NumberInput from "./NumberInput";
import "./Fieldset.module.css";

const Fieldset = ({addon, item}) => {

    const [view, setView] = useState(false);

    useEffect(() => {
        setView(false)
    }, [item])

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
            {addon.types.map((type) => {
                return (
                    <NumberInput key={type.id} style={{display: view ? '' : 'none' }} type={type} />
                )
            })}
        </fieldset>
    )
}

export default Fieldset