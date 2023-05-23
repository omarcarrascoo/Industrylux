import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PageDescription from '../components/pageDescription';
import PropertiesLoader from '../components/propertiesLoader';  
import Contacto from './Contacto';
function PropertyPage() {
const { urlES } = useParams();
const [properties, setProperties] = useState([])
const fetchProperties =()=>{
  fetch(`http://localhost:8000/api/industrialProperties/findByUrl/${urlES}`)
  .then(response =>{
    return response.json()
  })
  .then(data =>{
    setProperties(data)
  })
}
useEffect(()=>{
  fetchProperties()
},[])
const videoSrc = "https://youtu.be/pE3EuiyShoM"
  return (
    <section className="propertyPage">
      <div className="propertyPageImg">
        <img src="#" alt="Image Inmobilux" />
      </div>
      <div className="propertyPageTexts">
          <h1>{properties.h1ES}</h1>
          <p>Clave: {properties._id}</p>
          <p>Antiguedad: {properties.anoConstruccion}</p>
          <p>Precio: {properties.precioString}</p>
          <p>{properties.descripcionLarga}</p>
          <div className="propertyPageVideo">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/pE3EuiyShoM?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
      </div>
      
      <Contacto/>
    </section>
  )
}

export default PropertyPage
