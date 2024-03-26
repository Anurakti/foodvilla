import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, imageId, price }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-purple-50">
      <img src={IMG_CDN_URL + imageId} />
      <h2 className="font-bold">{name} </h2>
      <h3 className="font-light from-slate-500">Rs: {price / 100 || 300} </h3>
    </div>
  );
};

export default FoodItem;
