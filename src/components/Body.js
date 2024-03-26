import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); //optional chaining
    // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 Offline, please check your internet connection</h1>;
  }

  if (!allRestaurants) return null; // if you don't want to render component

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-purple-50 my-5">
        <input
          type="text"
          className="focus:bg-purple-200 p-2 m-2"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="p-2 m-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        {/* <input 
                value={user.name} 
                onChange={(e)=>setUser({
                    ...user,
                    name: e.target.value
                })}
            ></input>
            <input 
                value={user.email} 
                onChange={(e)=>setUser({
                    ...user,
                    email: e.target.value
                })}
            ></input> */}
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurants found matching your filter</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                className="link"
                // to={`/restaurant/${restaurant.data.id}`}
                // key={restaurant.data.id}
                key={restaurant?.info.id}
                to={"/restaurants/" + restaurant?.info.id}
              >
                {/* <RestaurantCard {...restaurant.data} /> */}
                <RestaurantCard resData={restaurant?.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
