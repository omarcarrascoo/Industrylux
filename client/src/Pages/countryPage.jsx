import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import BannerLoader from '../components/bannerLoader';
import PageDescription from '../components/pageDescription';
import PropertiesLoader from '../components/propertiesLoader';
import PropertyBanner from '../components/PropertyBanner';
import Contacto from './Contacto';
const CountryPage = () =>{
  const { country } = useParams();
  const [properties, setProperties] = useState([])
  const fetchProperties =()=>{
    fetch(`http://174.138.95.49/api/industrialProperties/find/${country}`)
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
    return(
        <>
            <section className='bannerCountry'>
            {properties.map(property =>(
              <PropertyBanner img ={property.imgRoute}/>
            ))}
            </section>
            <PageDescription data={country} maxLength={20}/>
            <PropertiesLoader properties={properties}/>
            <Contacto/>
        </>
    )
}

export default CountryPage;