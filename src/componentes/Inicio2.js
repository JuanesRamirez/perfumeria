import React from 'react'
import Header2 from './Header2';
import Footer from './footer/Footer';
import CardList from './body/CardList';
import Carrusel from './carrusel/Carrusel';
import SesionExpired from './sesionExpired/SesionExpired';

export default function Inicio2() {
  return (
    <div>
      <Header2/>
      <Carrusel/>
      <CardList/>
      <SesionExpired/>
      <Footer/>
    </div>
     
  );
}
