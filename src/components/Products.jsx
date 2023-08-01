import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';

function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>Products</div>
  )
}

export default Products