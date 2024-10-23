import { useEffect } from "react";
import { useState } from "react";
const useRestaurantName = (resId) => {
  useEffect(() => {
    fetchMenu();
    // eslint-disable-next-line
  }, []);

  const [resInfo, setresInfo] = useState("");

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.4805955&lng=88.41160649999999&restaurantId=${resId}`
    );

    const datajson = await data.json();
    setresInfo(datajson.data.cards[0].card.card.info.name);
    // console.log(datajson);
  };
  return resInfo;
};

export default useRestaurantName