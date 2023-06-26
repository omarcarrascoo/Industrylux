import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import BannerLoader from '../components/bannerLoader';
import PageDescription from '../components/pageDescription';
import PropertiesLoader from '../components/propertiesLoader';  
import Contacto from './Contacto';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import ContactC from '../components/ContactC';
function PropertyPage() {
const { urlProperty } = useParams();
const [properties, setProperties] = useState([])
const fetchProperties =()=>{
  fetch(`http://localhost:1337/api/industrialProperties/findByUrl/${urlProperty}`)
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
const videoSrc = properties.videos;
const imgFilter = properties.imgRoute
  return (
    <>
    <Helmet>
            <title>{properties.titleTag}</title>
            <meta name='description' content={properties.metaDescription} />
            <meta name='keywords' content={properties.keyWords} />
      </Helmet>
    <Header/>
    <section className="bannerCountry">
    {imgFilter? imgFilter.map(property =>(
              <BannerLoader img ={property}/>
            )) : <h4>Loading</h4>
    }
    </section>
    {/* <BannerLoader img={properties.imgRoute}/> */}
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
      <ContactC/>
    </section>
    </>
  )
}

export default PropertyPage
