import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import BannerLoader from '../components/bannerLoader';
import PageDescription from '../components/pageDescription';
import PropertiesLoader from '../components/propertiesLoader';  
import Contacto from './Contacto';
import { Helmet } from 'react-helmet';
function PropertyPage() {
const { urlProperty } = useParams();
const [properties, setProperties] = useState([])
const fetchProperties =()=>{
  fetch(`http://174.138.95.49:1337/api/industrialProperties/findByUrl/${urlProperty}`)
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
const videoSrc = properties.videos
console.log(videoSrc);
console.log();
  return (
    <>
    <Helmet>
            <title>{properties.titleTag}</title>
            <meta name='description' content={properties.metaDescription} />
            <meta name='keywords' content={properties.keyWords} />
      </Helmet>
    <BannerLoader img={properties.imgRoute}/>
    <section className="propertyPage">
      <div className="propertyPageTexts">
          <h1>{properties.h1}</h1>
          <h2>{properties.h2}</h2>
          <p>Clave: {properties.posicionListado}</p>
          {/* <p>Antiguedad: {properties.anoConstruccion}</p>
          <p>Precio: {properties.precioString}</p> */}
          <p>{properties.p}</p>
          <div className="propertyPageVideo">
      <iframe width="560" height="315" src= {videoSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
      </div>
      <Contacto/>
    </section>
    </>
  )
}

export default PropertyPage
