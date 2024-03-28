import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '..redux/actions.jsx';

const Home = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;