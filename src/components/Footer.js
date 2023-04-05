import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
    const {user} = useContext(UserContext)
    return (
        <div>
            <h3>Footer</h3>
            {/* <h4>{user.name}-{user.email}</h4> */}
        </div>
    )
}

export default Footer;