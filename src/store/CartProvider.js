import { useReducer } from "react";
import CartContex from "./Cart-Contex";

const DefaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

      return{
        item:updatedItems,
        totalAmount:updatedTotalAmount
      }
  }
  return DefaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, DefaultCartState);
  const addItemToCart = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItemToCart = (id) => {
    dispatchCart({ type: "Remove", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemToCart,
  };
  return (
    <CartContex.Provider value={cartContext}>
      {props.children}
    </CartContex.Provider>
  );
};

export default CartProvider;
