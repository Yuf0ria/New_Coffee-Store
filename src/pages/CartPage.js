import React, { useEffect, useState } from 'react';

const CartPage = ({ removeFromCart }) => {

  const [cart, setCart] = useState([]);

  const [error, setError] = useState(null);

  // Fetch cart data from the backend when the component mounts

  useEffect(() => {

    const fetchCart = async () => {

      try {

        const response = await fetch('http://localhost:5000/api/cart');

        

        if (!response.ok) {

          throw new Error('Failed to fetch cart data');

        }

        const data = await response.json();

        setCart(data); // Set the fetched cart data into state

      } catch (error) {

        console.error('Error fetching cart data:', error);

        setError(error.message); // Set the error message

      }

    };

    fetchCart();

  }, []);

  // Check if cart is an array

  if (!Array.isArray(cart)) {

    return <div>Error: Cart data is not valid.</div>;

  }

  // Calculate total price

  const totalPrice = cart.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);

  return (

    <div>

      <h2>Your Cart</h2>

      {error && <p>Error: {error}</p>} {/* Display error message if any */}

      {cart.length === 0 ? (

        <p>Cart is empty.</p>

      ) : (

        <ul>

          {cart.map(item => (

            <li key={item.productId._id}>

              {item.productId.name} - ${item.productId.price} x {item.quantity}

              <button onClick={() => removeFromCart(item.productId._id)}>Remove</button>

            </li>

          ))}

        </ul>

      )}

      <p>Total: ${totalPrice.toFixed(2)}</p> {/* Format total price to 2 decimal places */}

    </div>

  );

};

export default CartPage;