import Title from "./Title";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// const LoggedInUser = () => {
    
// }

const Header = () => {

    // const [loginStatus, setLoginStatus] = useState(true)

    // const {user} = useContext(UserContext)

    const cartItems = useSelector(store=>store.cart.items)

    return (
        <div className="flex justify-between bg-purple-50 shadow-lg">
            <Title/>
            <div className="">
                <ul className="flex py-10">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                    <li className="px-2"><Link to="/cart">Cart - {cartItems.length} items</Link></li>
                </ul>
            </div>
            {/* <div className="flex">
            {user.name}
                {loginStatus ? 
                <button onClick={()=> setLoginStatus(false)}>Logout</button> 
                : <button onClick={() => setLoginStatus(true)}>Login</button>}
            </div> */}
        </div>
    )
}

export default Header;