import "./Header.module.css"
import HeaderButton from "./HeaderButton"

const Header = ({setCart}) => {
    return (
        <header>
            <div className="wrapper">
                <h1>notTimmies</h1>
                <HeaderButton setCart={setCart} />
            </div>
        </header>
    )
}

export default Header