import "./Header.module.css"
import HeaderButton from "./HeaderButton"

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <h1>notTimmies</h1>
                <HeaderButton />
            </div>
        </header>
    )
}

export default Header