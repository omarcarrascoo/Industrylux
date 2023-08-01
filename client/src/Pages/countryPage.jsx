import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import BannerLoader from '../components/bannerLoader';
import PageDescription from '../components/pageDescription';
import PropertiesLoader from '../components/propertiesLoader';
import PropertyBanner from '../components/PropertyBanner';
import Contacto from './Contacto';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import ContactC from '../components/ContactC';

const CountryPage = () =>{
  const { country, lan } = useParams();
  const [properties, setProperties] = useState([])
  const fetchProperties =()=>{
    fetch(`http://localhost:1337/api/industrialProperties/find/${country}`)
    .then(response =>{
      return response.json()
    })
    .then(data =>{
      setProperties(data)
    })
  }
  const [page, setPage] = useState([]);
  const fetchPage = () => {
    fetch(`http://localhost:1337/api/countries/findByName/${country}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPage(data);
      });
  };
  useEffect(() => {
    fetchPage();
    fetchProperties()
  }, []);
  const propertiesFilter = properties.filter(element => element.lenguage === lan);
  const filteredHomeInfo = page.filter(element => element.lenguage === lan);
  // Assuming filteredHomeInfo is defined somewhere in your code or imported.

// Check if filteredHomeInfo is defined and not empty before accessing its properties.
const altLink = filteredHomeInfo && filteredHomeInfo[0] ? filteredHomeInfo[0].lanLink : 0;

    return(
        <>
          <Helmet>
            <title>{filteredHomeInfo.titleTag}</title>
            <meta name='description' content={filteredHomeInfo.metadescription} />
            <meta name='keywords' content={filteredHomeInfo.keyWords} />
          </Helmet>
          <Header alt={altLink}/>
            <section className='bannerCountry'>
            {propertiesFilter.map(property =>(
              <PropertyBanner key={property._id} img ={property.imgRoute}/>
              // <PropertyBanner key={property._id} img={property.imgRoute[property.imgRoute.length] || 0} />

            ))}
            </section>
            <PageDescription data={filteredHomeInfo} maxLength={20}/>
            <PropertiesLoader properties={propertiesFilter}/>
            <ContactC whaText = {filteredHomeInfo.titleTag}/>
        </>
    )
}

export default CountryPage;















