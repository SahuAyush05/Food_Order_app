import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContex from "../../store/Cart-Contex";
const HeaderCartButton = (props) => {

    const CartcTX=useContext(CartContex);
    const numberOfCartItems=CartcTX.items.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
