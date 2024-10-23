import { useState } from "react";
import React from "react";
//import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
//import useRestaurantName from "../utils/useRestaurantName";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "../pages/Shimmer";


const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null);
    const resInfo = useRestaurantMenu();

    if (resInfo === null) return <Shimmer />;

    // eslint-disable-next-line
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    // eslint-disable-next-line
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item => {
        return item.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });

    return (
        <div className="px-5 flex flex-col gap-6">
            <h2 className="text-center font-bold text-5xl pt-5">{name}</h2>
            <h3 className="text-center text-xl">{cuisines.join(", ")}</h3>

            <div className="w-6/12 flex flex-col items-center mx-auto">
                {categories.map((category, index) => (
                    <RestaurantCategory
                        key={index}
                        data={category?.card?.card}
                        showItems={showIndex === index}
                        setShowIndex={(index) => setShowIndex(prevIndex => prevIndex === index ? null : index)}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
