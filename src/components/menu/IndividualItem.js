import classes from "./IndividualItem.module.css";

const IndividualItem = ({item}) => {
    return (
        <div className={classes.individualItem}>
            <img src={item.image} alt="" />
            <p className={classes.title}>{item.title}</p>
            {/* <ul>
                {item.sizes.map((size) => {
                    return <li><button>{size.size}</button></li>
                })}
            </ul> */}
        </div>
    )
}

export default IndividualItem