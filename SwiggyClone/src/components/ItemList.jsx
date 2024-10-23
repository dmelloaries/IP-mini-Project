import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    console.log(item);
    dispatch(addItem(item));
    console.log("clicked");
  };

  return (
    <div className="w-full">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 py-2 flex justify-between  "
        >
          <div className="w-8/12">
            <p className="py-4 font-bold text-xl ">{item.card.info.name}</p>
            <p className="pb-2">
              ₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </p>
            <p className="pb-6">{item.card.info.description}</p>
          </div>
          <div className="">
            <div className="relative flex flex-col items-center mb-4">
              <div className="absolute bottom-0 text-[#3BA773] font-bold text-lg z-10 bg-w bg-white px-7 py-1 rounded-md shadow-lg active:bg-gray-300">
                <p className="px-3" onClick={() => handleAdd(item)}>
                  ADD
                </p>
              </div>

               
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                className="h-[144px] w-[156px] max-w-full rounded-lg my-4 bg-[#F6E6E9] "
                alt="Item Image"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
