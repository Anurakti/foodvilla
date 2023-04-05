import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Dummy Name",
        email: "dummy@gmail.com"
    }
})

UserContext.displayName = "UserContext" // display name is given for React dev tools to identify which context we are using
//it helps with debugging if you have 10 different context

export default UserContext 