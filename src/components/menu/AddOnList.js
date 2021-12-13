import addonsList from "../../store/addonsList";
import Fieldset from "./Fieldset";

const AddOnList = (props) => {

    return (
        <>
        {addonsList.map((addon) => {
            return (
                <Fieldset key={addon.id} addon={addon} item={props.item} />
            )
        })}
        </>
    )
}

export default AddOnList;