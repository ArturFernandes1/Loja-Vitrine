import React from 'react';
import CardCamada from './CardCamada'; // Supondo que o componente esteja no arquivo CardWithNavigation.js

const App = () => {
  // Array com os links das imagens
  const images = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  return (
    <div>
      <h1>Card com Navegação de Fotos</h1>
      <CardCamada images={images} />
    </div>
  );
};

export default App;
