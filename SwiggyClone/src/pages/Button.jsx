import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ onClick, disabled, icon }) => {
  return (
    <button
      onClick={onClick}
      className="h-10 w-10 text-center rounded-full bg-[#cbcbce] text-black flex items-center justify-center cursor-pointer hover:scale-90 transition-all duration-200 drop-shadow-xl focus:ring-4 ring-gray-200 active:scale-105 disabled:opacity-25 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default Button;