import React, { createContext, useContext, useState } from 'react';

// crea un contexto para el carrito de compras para compartir el estado del carrito entre componentes
const CartContext = createContext();

// hook personalizado para acceder al contexto del carrito en cualquier componente
export const useCart = () => {
  // consume el contexto CartContext y devuelve su valor
  return useContext(CartContext);
};

// froveedor del contexto (para que todos los componentes tengan acceso al carrito)
export const CartProvider = ({ children }) => {
  // fnicializa el estado del carrito como un arreglo vacío
  const [cart, setCart] = useState([]); 

  // función para agregar productos al carrito para actualizar  estado del carrito con los nuevos productos
  const addItemToCart = (product, quantity) => {
    setCart((prevCart) => {
      // Verifica si el producto ya existe en el carrito
      const existingItem = prevCart.find(item => item.id === product.id);

      // si el producto ya existe, actualiza su cantidad sumando la cantidad actual con la nueva cantidad
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }  
            : item  
        );
      } else {
        // sino existe se agrega al carrito con la cantidad
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // función para la cantidad total de productos en el carrito
  const getTotalItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0); // contar la cantidad total de productos en el carrito
  };

  // devuelve el proveedor del contexto (pasando el estado del carrito, la función para agregar productos y el contador de productos totales)
  return (
    <CartContext.Provider value={{ cart, addItemToCart, getTotalItemCount }}>
      {children}  {/* permite que los componentes hijos tengan acceso al contexto del carrito */}
    </CartContext.Provider>
  );
};
