import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="flex justify-center gap-5 mb-8">
                <h1 className="text-5xl font-bold text-center mt-5 text-gray-800"></h1>
                
                <div>
                    <button
                        onClick={handleClearCart}
                        className="bg-red-600 text-white px-4 py-2 mt-8 rounded-lg text-lg hover:bg-red-700 transition duration-300"
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
            <div className="w-full md:w-8/12 lg:w-6/12 flex flex-col items-center mx-auto bg-white p-8 rounded-lg shadow-md">
                <ItemList items={cartItems} />
            </div>
            {cartItems.length === 0 && (
                <p className="text-center text-lg pt-10 text-gray-600">Your cart is empty</p>
            )}
        </div>
    );
};

export default Cart;
