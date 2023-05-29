import React from 'react'
import {Link} from 'react-router-dom'
function PropertiesLoader({properties}) {
  console.log(properties);
  return (
    <section className="propertiesLoader">
        <div className="propertiesLoaderContainer">
        {properties.map(property =>(
              <Link className='linkProperties' key={property._id} to={`/es/bienes-raices-indusrieales/${property.urlCountry}/${property.urlProvince}/${property.urlCity}/${property.categoria}/${property.urlEs}`}>
              <div  className="propertyCard">
                  <div className="propertyImgCard">
                    <img src={`http://localhost:8000/assets/images/${property.imgRoute}`} alt="Image Flag" />
                  </div>
                  <div className="countryCardTextsProperty">
                    <h3>{property.h1ES}</h3>
                    <p>{property.descripcionLarga}</p>
                  </div>
                  <div className="vermas">
                    <p>Ver mas</p>
                  </div>
            </div>
              </Link>
            ))}
        </div>
    </section>
  )
}

export default PropertiesLoader
