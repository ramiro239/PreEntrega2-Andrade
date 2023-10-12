import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

const getProductById = async (productId) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('No se pudo obtener el producto');
    }
  } catch (error) {
    console.error('Error al obtener el producto por ID:', error);
    throw error;
  }
};

const ItemDetailContainer = () => {
  const [product, setProducts] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    getProductById(itemId)
      .then(response => {
        setProducts(response)
      })                
      .catch(error => {
        console.error(error)
      })
  }, [itemId])

  return (
    <div className="ItemDetailContainer" style={containerStyles}>
      <ItemDetail {...product} />
    </div>
  )
}

const containerStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "10px",
};

export default ItemDetailContainer