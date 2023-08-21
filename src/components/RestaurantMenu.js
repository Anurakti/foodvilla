import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  console.log("hello");
  //how to read a dynamic url params - by using useParams hook
  const params = useParams();
  // console.log("params", params);

  const [restaurant, restaurantMenu] = useRestaurant(params.id);
  // console.log("restaurant==>", restaurant);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    // console.log("item", item)
    dispatch(addItem(item));
  };

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="flex space-x-5">
      <div>
        <h1>Restaurant Id: {params.id} </h1>
        <h2 className="font-bold">{restaurant.name} </h2>
        <img
          style={{ width: "200px", height: "120px", border: "1px black solid" }}
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        />
        <h3>{restaurant.areaName} </h3>
        <h3>{restaurant.city} </h3>
        <h3>{restaurant.avgRating} </h3>
        <h3>{restaurant.costForTwoMessage} </h3>
      </div>
      <div className="restaurant-menu">
        <h1 className="font-bold">Menu</h1>
        <ul>
          {restaurantMenu.map((element) => (
            <li key={element?.card?.info?.id}>
              {element?.card?.info?.name} -{" "}
              <button
                className="p-1 bg-green-50"
                onClick={() => addFoodItem(element.card.info)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
