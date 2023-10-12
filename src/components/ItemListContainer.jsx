import React, { useState, useEffect } from 'react';
import "../css/main.css";
import ItemList from './ItemList';
import {useParams} from "react-router-dom"


function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = categoryId
          ? await getProductByCategory(categoryId)
          : await getProducts();

        setProducts(response);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    fetchData();
  }, [categoryId]);

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  };

  const getProductByCategory = async (categoryId) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`);
    const data = await response.json();
    return data;
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products}/>
    </div>
  );
}

export default ItemListContainer