import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../redux/actions.jsx';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateQuantity(productId, quantity));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total Price: ${item.totalPrice}</p>
          <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>Increase</button>
          <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>Decrease</button>
          <button onClick={() => handleRemoveFromCart(item.id)}>Delete</button>
        </div>
      ))}
      <p>Total Price for all items: ${cart.reduce((total, item) => total + item.totalPrice, 0)}</p>
    </div>
  );
};

export default Cart;