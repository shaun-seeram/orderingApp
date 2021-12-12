import addonsList from "../../store/addonsList";
import Fieldset from "./Fieldset";

const AddOnList = () => {

    return (
        <>
        {addonsList.map((addon) => {
            return (
                <Fieldset key={addon.id} addon={addon} />
            )
        })}
        </>
    )
}

export default AddOnList;