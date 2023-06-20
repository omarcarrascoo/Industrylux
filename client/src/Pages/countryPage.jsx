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
    fetch(`http://143.110.234.115/api/industrialProperties/find/${country}`)
    .then(response =>{
      return response.json()
    })
    .then(data =>{
      setProperties(data)
    })
  }
  const [page, setPage] = useState([]);
  const fetchPage = () => {
    fetch(`http://143.110.234.115/api/countries/findByName/${country}`)
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
    return(
        <>
          <Helmet>
            <title>{filteredHomeInfo.titleTag}</title>
            <meta name='description' content={filteredHomeInfo.metaDescription} />
            <meta name='keywords' content={filteredHomeInfo.keyWords} />
          </Helmet>
          <Header/>
            <section className='bannerCountry'>
            {propertiesFilter.map(property =>(
              <PropertyBanner key={property._id} img ={property.imgRoute[0]}/>
            ))}
            </section>
            <PageDescription data={filteredHomeInfo} maxLength={20}/>
            <PropertiesLoader properties={propertiesFilter}/>
            <ContactC/>
        </>
    )
}

export default CountryPage;

















// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import BannerLoader from '../components/bannerLoader';
// import PageDescription from '../components/pageDescription';
// import PropertiesLoader from '../components/propertiesLoader';
// import PropertyBanner from '../components/PropertyBanner';
// import Contacto from './Contacto';
// import { Helmet } from 'react-helmet';

// const CountryPage = () => {
//   const { country, lan } = useParams();
//   const [properties, setProperties] = useState([]);
//   const fetchProperties = () => {
//     fetch(`http://143.110.234.115/api/industrialProperties/find/${country}`)
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         setProperties(data);
//       });
//   };
//   const [page, setPage] = useState(null);
//   const fetchPage = () => {
//     fetch(`http://143.110.234.115/api/countries/findByName/${country}`)
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         setPage(data[0]);
//       });
//   };
//   useEffect(() => {
//     fetchPage();
//     fetchProperties();
//   }, []);

//   if (page === null) {
//     // Handle the case when page is null
//     return <div>Loading...</div>;
//   }

//     // const filteredHomeInfo = page.filter(element => element.lenguage === lan);
//     // console.log(filteredHomeInfo + "hola");
//     // const filteredHomeInfo = page.filter(element => element.lenguage === lan);
//     console.log(page);

//   return (
//     <>
//       <Helmet>
//         <title>{page.titleTag}</title>
//         <meta name='description' content={page.metaDescription} />
//         <meta name='keywords' content={page.keyWords} />
//       </Helmet>
//       <section className='bannerCountry'>
//         {properties.map(property => (
//           <PropertyBanner img={property.imgRoute} key={property.id} />
//         ))}
//       </section>
//       <PageDescription data={country} maxLength={20} />
//       <PropertiesLoader properties={properties} />
//       <Contacto />
//     </>
//   );
// };

// export default CountryPage;
