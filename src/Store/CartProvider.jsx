import React, { useReducer, useEffect } from "react";
import CartContext from "./Cart-Context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

      const existingCartItemIndex = Array.isArray(state.items) ? state.items.findIndex(
        (item) => item.id === action.item.id
      ) : -1;

      const existingCartItem = existingCartItemIndex !== -1 ? state.items[existingCartItemIndex] : null;
      let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = Array.isArray(state.items) ? [...state.items, action.item] : [action.item];
    }

    // Save to local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    // Save to local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "SET") {
    return {
      items: action.items,
      totalAmount: calculateTotalAmount(action.items),
    };
  }

  return defaultCartState;
};

const calculateTotalAmount = (items) => {
  if (!items) {
    return 0;
  }
  return items.reduce((total, item) => total + item.price * item.amount, 0);
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));

    if (storedCartItems) {
      dispatchCartAction({ type: "SET", items: storedCartItems });
    }
  }, []);

  const addItemToCartHandler = (item) => {
    const updatedItems = Array.isArray(cartState.items) ? [...cartState.items, item] : [item];
    dispatchCartAction({ type: 'ADD', item: item });
    storeCartItemsToBackend(updatedItems);
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
    updateCartItemsInBackend(cartState.items.filter((item) => item.id !== id));
  };

  const storeCartItemsToBackend = async (items) => {
    const apiKey = "6f70f7ea9fcd439582c40e032df57e1f";

    try {
      const response = await fetch(`https://crudcrud.com/api/${apiKey}/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) {
        throw new Error("Failed to store cart items");
      }
    } catch (error) {
      console.error("Error storing cart items:", error.message);
    }
  };

  const updateCartItemsInBackend = async (items) => {
    const apiKey = "6f70f7ea9fcd439582c40e032df57e1f";

    try {
      const response = await fetch(`https://crudcrud.com/api/${apiKey}/cart`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) {
        throw new Error("Failed to update cart items");
      }
    } catch (error) {
      console.error("Error updating cart items:", error.message);
    }
  };

  useEffect(() => {
    fetchCartItemsFromBackend();
  }, []);

  const fetchCartItemsFromBackend = async () => {
    const apiKey = "6f70f7ea9fcd439582c40e032df57e1f";

    try {
      const response = await fetch(`https://crudcrud.com/api/${apiKey}/cart`);

      if (response.ok) {
        const data = await response.json();
        dispatchCartAction({ type: "SET", items: data.items });
      } else {
        console.error("Failed to fetch cart items");
      }
    } catch (error) {
      console.error("Error fetching cart items:", error.message);
    }
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
