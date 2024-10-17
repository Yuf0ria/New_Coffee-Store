import React, { useEffect, useState } from 'react';

import ProductCard from '../components/ProductCard';

const HomePage = ({ addToCart }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      const response = await fetch('http://localhost:5000/api/products');

      const data = await response.json();

      setProducts(data);

    };

    fetchProducts();

  }, []);

  return (

    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

      {products.map(product => (

        <ProductCard key={product._id} product={product} addToCart={addToCart} />

      ))}

    </div>

  );

};

export default HomePage;