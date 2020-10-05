import { PRODUCT_LIST_FAILED, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

function productListReducer(state = {product: []}, action){
  console.log('action type ', action)
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {loading: true, products: []};
    case PRODUCT_LIST_SUCCESS:
      return {loading: false, products: action.payload};
    case PRODUCT_LIST_FAILED:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
}

export {productListReducer}