import React from 'react'
import {Link} from 'react-router-dom'
function PropertiesLoader({properties}) {
    console.log(properties);
  return (
    <section className="propertiesLoader">
        <div className="propertiesLoaderContainer">
        {properties.map(property =>(
              <Link key={property._id} to={`/es/bienes-raices-indusrieales/${property.urlCountry}/${property.urlProvince}/${property.urlCity}/${property.categoria}/${property.urlEs}`}>
                <div  className="propertyCard">
              <div className="propertyImgCard">
                <img src="https>jad" alt="Image Flag" />
              </div>
              <div className="countryCardTexts">
                <h3>{property.h1ES}</h3>
              </div>
            </div>
              </Link>
            ))}
        </div>
    </section>
  )
}

export default PropertiesLoader
