import { createSlice } from "@reduxjs/toolkit";

const getWishList = () => {
  const wishList = JSON.parse(sessionStorage.getItem("wishCart"));
  if (wishList) {
    return wishList;
  } else {
    return [];
  }
};

const getCart = () => {
    const cart = JSON.parse(sessionStorage.getItem('Cart'))
    if(cart){
        return cart
    }else{
        return []
    }
}

const getItemsInCart = () =>{
  const cart = JSON.parse(sessionStorage.getItem('Cart'))
  if(cart){
    return cart.length
  }else{
    return 0
  }
}

const initialState = {
  wishList: getWishList(),
  cart: getCart(),
  ItemsInCart: getItemsInCart(),
  modalOpen: false,
  productInModal: {}
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const cartLength = state.cart.length;
      if (cartLength) {
        const index = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index === -1) {
          state.cart.push({ ...action.payload, quantity: 1 });
          sessionStorage.setItem("Cart", JSON.stringify(state.cart));
          state.ItemsInCart++;
        } // not written else since I don't want to increase the quantity from Add to Cart button
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        sessionStorage.setItem("Cart", JSON.stringify(state.cart));
        state.ItemsInCart++;
      }
    },
    REMOVE_FROM_CART: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      sessionStorage.setItem("Cart", JSON.stringify(state.cart));
      state.ItemsInCart--;
    },
    INCREASE_QUANTITY: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[index] = {
        ...action.payload,
        quantity: action.payload.quantity + 1,
      };
      sessionStorage.setItem("Cart", JSON.stringify(state.cart));
    },
    DECREASE_QUANTITY: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[index].quantity > 1) {
        state.cart[index] = {
          ...action.payload,
          quantity: action.payload.quantity - 1,
        };
        sessionStorage.setItem("Cart", JSON.stringify(state.cart));
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        sessionStorage.setItem("Cart", JSON.stringify(state.cart));
        state.ItemsInCart--;
      }
    },
    ADD_TO_WISHLIST: (state, action) => {
      const length = state.wishList.length;
      if (length) {
        const index = state.wishList.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index === -1) {
          state.wishList.push(action.payload);
          sessionStorage.setItem("wishCart", JSON.stringify(state.wishList));
        }
      } else {
        state.wishList.push(action.payload);
        sessionStorage.setItem("wishCart", JSON.stringify(state.wishList));
      }
    },
    REMOVE_FROM_WISHLIST: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload.id
      );
      sessionStorage.setItem("wishCart", JSON.stringify(state.wishList));
    },
    CHANGE_MODAL: (state) =>{
      state.modalOpen = !state.modalOpen
    },
    ADD_PRODUCT_IN_MODAL: (state, action) => {
      state.productInModal = action.payload
    }
  },
});

export const { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, CHANGE_MODAL, ADD_PRODUCT_IN_MODAL } = cartSlice.actions;
export default cartSlice.reducer;
