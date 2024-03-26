import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState({});
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();

    setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    console.log(json?.data);
  }

  return [restaurant, restaurantMenu]; //to return 2 things at a time we have to use data structure like array or object
};
export default useRestaurant;
