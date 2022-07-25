import { GET_PRODUCTS, PRODUCT_ERROR } from '../actions/constants';

const initialProduct = {
  listing: [],
  loading: true,
  error: {},
  productsLength: 0
};

export const products = (state = initialProduct, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        listing: payload,
        loading: false,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
