import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("resdata" + resData);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;

  return (
    <div>
      <div className="res-card flex-shrink-0 w-64 p-4 m-4 rounded-lg bg-white transition-transform hover:scale-105">
        <img
          className="res-logo w-full h-40 object-cover rounded-lg mb-4"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />

        <h3 className="text-xl text-gray-700 font-semibold mb-2 truncate">{name}</h3>
        <h4 className="text-lg text-gray-700 font-semibold">
          {avgRating}❇️ {costForTwo}
        </h4>
        <h4 className="text-sm text-gray-600 mb-2 truncate">
          {cuisines.join(", ")}
        </h4>
      </div>
    </div>
  );
};


// Need to add Higher order function to add discounted Label to it
export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="">
        
        
        <RestaurantCard {...props} />
      </div>
      
    );
  };
};

export default RestaurantCard;
