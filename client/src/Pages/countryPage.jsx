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
    fetchProperties();
  }, [country]);

  const propertiesFilter = properties.filter(element => element.lenguage === lan);
  const filteredHomeInfo = page.filter(element => element.lenguage === lan);
  const altLink = filteredHomeInfo && filteredHomeInfo[0] ? filteredHomeInfo[0].lanLink : 0;
    console.log(filteredHomeInfo);
    return(
        <>
          <Helmet>
            <title>{filteredHomeInfo.titleTag}</title>
            <meta name='description' content={filteredHomeInfo.metadescription} />
            <meta name='keywords' content={filteredHomeInfo.keyWords} />
          </Helmet>
          <Header alt={altLink}/>
            <section className='bannerCountry'>
              <PropertyBanner img={filteredHomeInfo} />
            </section>
            <PageDescription data={filteredHomeInfo} maxLength={20}/>
            <PropertiesLoader properties={propertiesFilter}/>
            <ContactC whaText = {filteredHomeInfo[0]?.h1}/>
        </>
    )
}

export default CountryPage;















