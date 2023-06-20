import React from 'react'
import {Link} from 'react-router-dom'
function PropertiesLoader({properties}) {
  return (
    <section className="propertiesLoader">
        <div className="propertiesLoaderContainer">
        {properties.map(property =>(
              <Link className='linkProperties' key={property._id} to={`/es/${property.urlCountry}/${property.urlProvince}/${property.urlCity}/${property.category}/${property.urlProperty}`}>
              <div  className="propertyCard">
                  <div className="propertyImgCard">
                    <img src={`http://143.110.234.115/${property.imgRoute[0]}`} alt="Image Flag" />
                  </div>
                  <div className="countryCardTextsProperty">
                    <h3>{property.h1}</h3>
                    <p>{property.p}</p>
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
