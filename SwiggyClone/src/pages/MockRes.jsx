import MockData from "../utils/MockData";
import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const MockRes = () => {
  const [data] = useState(MockData);
  return (
    <div className="mx-40">
      <br className="shadow-2xl"></br>
      <div className="font-extrabold pl-4">
        <h1 className="text-3xl font-bold m-4">
          Restaurants with online food delivery 
        </h1>
      </div>

      <div className="cursor-pointer flex flex-wrap">
        {data.map((restaurant) => (
          <div
            key={restaurant.data.uuid}
            className="res-card flex-shrink-0 w-64 p-4 m-4 rounded-lg bg-white transition-transform hover:scale-105"
          >
            <img
              className="res-logo w-full h-40 object-cover rounded-lg mb-4"
              alt="res-logo"
              src={CDN_URL + restaurant.data.cloudinaryImageId}
            />

            <h3 className="text-xl text-gray-700 font-semibold mb-2 truncate">
              {restaurant.data.name}
            </h3>
            <h4 className="text-lg text-gray-700 font-semibold">
              {restaurant.data.avgRating} ❇️{" "}
              {`₹${restaurant.data.costForTwo / 100} FOR TWO`}
            </h4>
            <h4 className="text-sm text-gray-600 mb-2 truncate">
              {restaurant.data.cuisines.join(", ")}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockRes;
