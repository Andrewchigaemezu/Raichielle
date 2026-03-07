import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cartCounter",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const exist = state.cart.some(
        (existingProduct) => existingProduct.id === actions.payload.id,
      );
      if (!exist) state.cart.push(actions.payload);
    },
    removeFromCart: (state, actions) => {
      state.cart = state.cart.filter(
        (product) => product.id !== actions.payload.id,
      );
    },
    increaseQuant: (state, actions) => {
      const productId = Number(actions.payload);
      const item = state.cart.find((p) => p.id === productId);
      if (item) item.quantity += 1;
    },
    decreaseQuant: (state, actions) => {
      const productId = Number(actions.payload);
      const item = state.cart.find((product) => product.id === productId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter((product) => product.id !== productId);
      }
    },
  },
});

// Getting the cart state
const selectCartItems = (state) => state.cart.cart;

// Calculating subtotal
export const cartSubtotal = createSelector([selectCartItems], (items) => {
  return items.reduce((acc, item) => {
    const itemTotal = item.price * item.quantity;
    // console.log(itemTotal);
    return acc + itemTotal;
  }, 0);
});
export const cartQuantTotal = createSelector([selectCartItems], (items) => {
  return items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
});

const menuInitialState = { isOpen: false };
const menuModalSlice = createSlice({
  name: "menuModal",
  initialState: menuInitialState,
  reducers: {
    openCloseModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});
const store = configureStore({
  reducer: { cart: cartSlice.reducer, modal: menuModalSlice.reducer },
});

export default store;

export const cartActions = cartSlice.actions;
export const menuModalActions = menuModalSlice.actions;
