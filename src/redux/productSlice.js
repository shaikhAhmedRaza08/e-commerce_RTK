import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get(`https://fakestoreapi.com/products`);
  dispatch(productActions.setProduct(response.data));
};

export const productActions = productSlice.actions;
export const productReducers = productSlice.reducer;
