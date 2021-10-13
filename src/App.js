import Navbar from './components/Navbar';
import Products from './components/Products';
import React, { useEffect, useState } from 'react';



function App() {

  const [products, setproducts] = useState([]);

  const initialUrl = 'http://localhost:3050/productos';
  const fetchProducts = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setproducts(data))
      .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchProducts(initialUrl);
  }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        <Products products={products} />
      </div>
    </>
  );
}

export default App;
