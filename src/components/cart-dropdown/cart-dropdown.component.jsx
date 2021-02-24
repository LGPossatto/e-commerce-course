import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Go TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;