import {Link, useParams} from 'react-router-dom'
function PropertiesLoader({properties}) {
  const {lan} = useParams ()
  const seof = lan == "es"? "bienes-raices-industriales" : "industrial-real-estate"
  return ( 
    <section className="propertiesLoader">
        <div className="propertiesLoaderContainer">
        {properties.map(property =>(
              <Link className='linkProperties' key={property._id} to={`/${lan}/${seof}/${property.urlCountry}/${property.urlProvince}/${property.urlCity}/${property.urlCategory}/${property.urlProperty}`}>
              <div  className="propertyCard">
                  <div className="propertyImgCard">
                    <img src={`https://industrylux.com/${property.imgRoute[0]}`} alt="Image Flag" />
                  </div>
                  <div className="countryCardTextsProperty">
                    <h3>{property.h1}</h3>
                    {/* <p>{property.p}</p> */}
                    <p dangerouslySetInnerHTML={{ __html: property.p }} />
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
