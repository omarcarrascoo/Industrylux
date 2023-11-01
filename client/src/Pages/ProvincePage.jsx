

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageDescriptionC from '../components/PageDescriptionC';
import PropertiesLoader from '../components/propertiesLoader';
import { Helmet } from 'react-helmet';
import ContactC from '../components/ContactC';
import Header from '../components/Header';
import PropertyBanner from '../components/PropertyBanner';
const ProvincePage = () => {
  const { urlProvince, lan } = useParams();
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState([]);

  const fetchProperties = async () => {
    await fetch(`https://industrylux.com/api/industrialProperties/findByProvinceOrCategory/${urlProvince}`)
      .then(response => response.json())
      .then(data => setProperties(data));
  };

  const fetchPage = async () => {
    await fetch(`https://industrylux.com/api/provinces/findByUrl/${urlProvince}`)
      .then(response => response.json())
      .then(data => setPage(data));
  };

  useEffect(() => {
    fetchProperties();
    fetchPage();
  }, [urlProvince]);

    const propertiesFilter = properties.filter(element => element.lenguage === lan);

    const filteredPage= page? page.filter(element => element.lenguage === lan): page

    const helper = filteredPage[0] || 0
  
  return (
    <>
      <Helmet>
            <title>{helper.titleTag}</title>
            <meta name='description' content={helper.metadescription} />
            <meta name='keywords' content={helper.keyWords} />
      </Helmet>
      <Header alt={helper.lanLink}/>
      <section className='bannerCountry'>
        <PropertyBanner img={helper.imgCover} />
      </section>
      <PageDescriptionC data={helper} />
      <PropertiesLoader properties={propertiesFilter} />
      <ContactC whaText = {helper.titleTag} />
    </>
  );
};

export default ProvincePage;
