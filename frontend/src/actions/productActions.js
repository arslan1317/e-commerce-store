import { PRODUCT_LIST_FAILED, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";
import axios from 'axios'

const listProduct = () => async (dispatch) => {
  try{
    dispatch({type: PRODUCT_LIST_REQUEST});
    const {data} = await axios.get("/api/products");
    dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
  } catch(error) {
    dispatch({type: PRODUCT_LIST_FAILED, payload: error.message});
  }
  
}

export { listProduct }