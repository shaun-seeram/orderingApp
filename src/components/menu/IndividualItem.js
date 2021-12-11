import { useEffect, useState } from "react";
import classes from "./IndividualItem.module.css";
import menuList from "../../store/menuList";
import addonsList from "../../store/addonsList";

const IndividualItem = (props) => {

    const [size, setSize] = useState("Small");
    const [sizeIndex, setSizeIndex] = useState(0);

    const item = menuList[props.categoryIndex].items[props.itemIndex];

    useEffect(() => {
        const index = item.sizes.findIndex((item) => {
            return item.size === size;
        })

        setSizeIndex(index);
    }, [size])

    return (
        <div className={classes.individualItem}>
            <img src={item.image} alt="" />
            <div className={classes.title}>
                <p>{item.title}</p>
                <p className={classes.small}>{item.sizes[sizeIndex].calories} Cal</p>
            </div>
            <div className={classes.buttons}>
                {item.sizes.map((size) => {
                    return (
                        <button className={classes.sizeButton}>{[...size.size][0]}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default IndividualItem