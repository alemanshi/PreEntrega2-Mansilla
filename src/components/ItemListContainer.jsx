import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { getProducts, getCategory } from '../asyncMock'; 
import Item from './Item'; 
import './ItemListContainer.css'; 

const ItemListContainer = () => {
  const { categoryId } = useParams();             // obtengo el categoryId de la URL utilizando useParams para filtrar los productos por categoría
  const [products, setProducts] = useState([]);   // inicializo el estado products para almacenar los productos que se mostrarán
  const [loading, setLoading] = useState(true);   // inicializo el estado loading para indicar si los productos están siendo cargados (o no) 
  
  useEffect(() => {
    setLoading(true); // antes de hacer la solicitud, pongo loading como true para mostrar el mensaje de "cargando productos"
    const fetchProducts = categoryId ? getCategory(categoryId) : getProducts; // si categoryId existe, llamo a getCategory con ese Id (caso contrario llamo a getProducts para obtener todos los productos)
    fetchProducts.then((data) => {
      setProducts(data); // actualizo el estado products con los datos obtenidos
      setLoading(false); // después de que los productos cargaron, pongo loading como false
    }).catch((error) => {
      console.error("Error fetching products:", error); // se imprime el error si ocurre al obtener los productos
      setLoading(false);  // idem false para deajr de mostrar el mensaje
    });
  }, [categoryId]); // sse ejecuta cada vez que cambia el categoryId (permite cargar los productos correspondientes a la nueva categoría)
  
  return (
    <div className="item-list-container">
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        products.map((product) => (
          <Item 
            key={product.id} 
            id={product.id} 
            image={product.image} 
            title={product.title} 
            description={product.description} 
            price={product.price} 
          />
        ))
      )}
    </div>
  );
};

export default ItemListContainer;
