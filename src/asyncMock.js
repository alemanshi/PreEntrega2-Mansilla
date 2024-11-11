import miel1 from './assets/Miel1.jpg';
import miel2 from './assets/Miel2.jpg';
import miel3 from './assets/Miel3.jpg';
import jalea1 from './assets/Jalea1.jpg';
import propolis1 from './assets/Propolis1.jpg';
import propolis2 from './assets/Propolis2.jpg';

const products = [
  // Productos de la categoría "Mieles"
  {
    id: 1,
    title: 'Miel',
    price: '100',
    category: 'Mieles',
    description: 'Miel Pura 1/4 Kgs',
    image: miel1,
  },
  {
    id: 2,
    title: 'Miel',
    price: '200',
    category: 'Mieles',
    description: 'Miel Pura 1/2 Kgs',
    image: miel2,
  },
  {
    id: 3,
    title: 'Miel',
    price: '300',
    category: 'Mieles',
    description: 'Miel Pura 1 Kg',
    image: miel3,
  },

  // Productos de la categoría "Jalea Real"
  {
    id: 4,
    title: 'Jalea Real',
    price: '50',
    category: 'Jalea Real',
    description: 'Jalea Real Fresca 10g',
    image: jalea1,
  },
  {
    id: 5,
    title: 'Jalea Real',
    price: '150',
    category: 'Jalea Real',
    description: 'Jalea Real Fresca 20g',
    image: jalea1,
  },
  {
    id: 6,
    title: 'Jalea Real',
    price: '200',
    category: 'Jalea Real',
    description: 'Jalea Real Fresca 30g',
    image: jalea1,
  },

  // Productos de la categoría "Propóleo"
  {
    id: 7,
    title: 'Propóleo',
    price: '120',
    category: 'Propóleo',
    description: 'Extracto de Propóleo 20ml',
    image: propolis1,
  },
  {
    id: 8,
    title: 'Propóleo',
    price: '250',
    category: 'Propóleo',
    description: 'Propóleo en cápsulas 30 unidades',
    image: propolis2,
  },
  {
    id: 8,
    title: 'Propóleo',
    price: '300',
    category: 'Propóleo',
    description: 'Propóleo en cápsulas 45 unidades',
    image: propolis2,
  }
];

export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
  }, 3000); 
});

export const getProduct = (id) => {
  return products.find((prod) => prod.id === id);
};

export const getCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 3000);
  });
};

