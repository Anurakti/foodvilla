import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/UserContext";


const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {

    // const {user} = useContext(UserContext)
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-purple-50">
            <img src={ IMG_CDN_URL
            + cloudinaryImageId}/>
            <h2 className="font-bold">{name} </h2>
            <h3 className="font-light from-slate-500">{cuisines.join(", ")} </h3>
            <h4 className="font-bold">{avgRating}⭑⭑⭑ </h4>
            {/* <h5>{user.name}-{user.email}</h5> */}
            
        </div>
    )
}

export default RestaurantCard;