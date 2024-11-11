import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { getProduct } from '../asyncMock'; 
import QuantitySelector from './QuantitySelector'; 
import { useCart } from './CartContext'; 
import './ItemDetailContainer.css'; 

const ItemDetailContainer = () => {
  const { itemId } = useParams();                    // Extraigo el parámetro `itemId` de la URL usando useParams. Este ID es usado para buscar un producto específico
  const [product, setProduct] = useState(null);      // inicializo el estado product en null  (se actualizará con la información del producto obtenido)
  const { addItemToCart } = useCart();              // obtengo la función addItemToCart del contexto de carrito para poder agregar productos al mismo
  const [quantity, setQuantity] = useState(1);      // inicializo el estado quantity con el valor 1 para controlar la cantidad seleccionada del producto
  
  useEffect(() => {
    const fetchedProduct = getProduct(parseInt(itemId));  // dentro de useEffect, obtengo el producto usando el ID del parámetro de la URL y lo paso a la función getProduc
    setProduct(fetchedProduct);                           // obtenido el producto, actualizo el estado product con los datos del producto
  }, [itemId]);                                           // efecto q se ejecuta cada vez que cambia el itemId (permite cargar el producto correspondiente)
  

  const handleQuantityChange = (newQuantity) => {   // función q actualiza el estado quantity cuando el usuario cambia la cantidad a través del componente QuantitySelector
    setQuantity(newQuantity); 
  };

  const handleAddToCart = () => {
    if (product) {  // si hay un producto disponible lo agrego al carrito con la cantidad indicada
      addItemToCart(product, quantity); 
    }
  };

  return (
    <div className="item-detail-container">
      {product ? (
        // si product tiene datos, muestra los detalles del producto
        <div className="product-detail">
          <div className="product-image">
            <img src={product.image} alt={product.title} />
            {/* muestro la imagen del producto usando los datos del producto */}
          </div>
          <div className="product-info">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Precio: ${product.price}</p>
            
            <QuantitySelector
              initialQuantity={quantity}
              onQuantityChange={handleQuantityChange}
            />
            <button onClick={handleAddToCart} className="add-to-cart-btn">
              Agregar al carrito
            </button>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
        // Si product no está disponible (muestra el texto "cargando" )
      )}
    </div>
  );
};

export default ItemDetailContainer; 

