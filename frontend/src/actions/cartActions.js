import Axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

const addToCart = (productId, qty) => async (dispath) => {
  try {

    const {data} = await Axios.get("/api/product/" + productId);
    console.log('data', data)
    dispath({type: CART_ADD_ITEM, payload:{
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }})

  } catch (error) {
    
  }
}

export { addToCart }