import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProduct } from '../actions/productActions';

function HomeScreen (props) {

  const productList = useSelector((state) => state.productList);
  const {products, loading, error} = productList;
  console.log('product list ', productList);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('use Effect is running');
    dispatch(listProduct())
  }, [])

  return  loading ? <div>Loading...</div> : error ? <div>{error}</div> : productList.product ? <div>Loading,..</div> : <ul className="products">
  {
    products.map(product => 
      <li key={product._id}>
        <div className="product">
          <Link to={'/product/' + product._id}>
            <img className="product-image"src={product.image} alt="product"/>
          </Link>
          <div className="product-name">
            <Link to={'/product/' + product._id}>
              {product.name}
            </Link>
          </div>
          <div className="product-brand">{product.brand}</div>
          <div className="product-price">${product.price}</div>
          <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
        </div>
      </li>
    )
  }
  
</ul>
}

export default HomeScreen;