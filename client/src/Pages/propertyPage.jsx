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
const [showMore, setShowMore] = useState(false);
const maxCharacters = 500;
const fetchProperties =()=>{
  fetch(`https://industrylux.com/api/industrialProperties/findByUrl/${urlProperty}`)
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
const toggleShowMore = () => {
  setShowMore(!showMore);
};
const videoSrc = properties.videos;
const no = null;
const imgFilter = properties.imgRoute
const text = properties?.p;
const altLink = properties ? properties.lanLink : 0;
  return (
    <>
    <Helmet>
            <title>{properties.titleTag}</title>
            <meta name='description' content={properties.metadescription} />
            <meta name='keywords' content={properties.keyWords} />
      </Helmet>
    <Header alt={altLink}/>
    <section className="bannerCountry">
    {imgFilter? imgFilter.toReversed().map(property =>(
              <BannerLoader img ={property}/>
            )) : <h4>Loading</h4>
    }
    </section>
    {/* <BannerLoader img={properties.imgRoute}/> */}
    <section className="propertyPage">
      <div className="propertyPageTexts">
          <h1>{properties.h1}</h1>
          <h2 className='title-page'>{properties.h2}</h2>
          <p>Clave: {properties.posicionListado}</p>
          {/* <p>Antiguedad: {properties.anoConstruccion}</p>
          <p>Precio: {properties.precioString}</p> */}
          <p>
            {text && (
                <>
                  {showMore ? text : `${text.slice(0, maxCharacters)}...`}
                  {text.length > maxCharacters && (
                    <>
                      {' '}
                      {showMore ? (
                        <div className="btnShowContainer">
                          <button className='btnShow' onClick={toggleShowMore}>Mostrar menos</button>
                        </div>
                      ) : (
                        <button className='btnShow' onClick={toggleShowMore}>Mostrar más</button>
                      )}
                    </>
                  )}
                </>
              )}          
          </p>
          {videoSrc? <div className="propertyPageVideo">
            <iframe width="560" height="315" src= {videoSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div> : no}
      </div>
      <ContactC whaText = {properties.titleTag}/>
    </section>
    </>
  )
}

export default PropertyPage
