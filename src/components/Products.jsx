import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import ProductCard from './ProductCard';

function Products() {
  const dispatch = useDispatch();
  const { data: products } = useSelector(state => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  console.log("products: ", products);

  return (
    <>
      <div className="row">
        <h1>Product Dashboard</h1>
        {
          products?.map(product => (<ProductCard key={product.id} product={product} buttonTitle="Add to cart" />))
        }
      </div>
    </>
  )
}

export default Products