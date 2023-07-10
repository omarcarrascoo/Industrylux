

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageDescriptionC from '../components/PageDescriptionC';
import PropertiesLoader from '../components/propertiesLoader';
import { Helmet } from 'react-helmet';
import ContactC from '../components/ContactC';
import Header from '../components/Header';
const ProvincePage = () => {
  const { urlProvince, lan } = useParams();
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState([]);

  const fetchProperties = async () => {
    await fetch(`https://industrylux.com/api/industrialProperties/findByProvince/${urlProvince}`)
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
  console.log(page);
    const filteredPage= page.filter(element => element.lenguage === lan)
    console.log(filteredPage);
    const helper = filteredPage[0] || 0
    console.log(helper);
  return (
    <>
      <Helmet>
            <title>{helper.titleTag}</title>
            <meta name='description' content={helper.metaDescription} />
            <meta name='keywords' content={helper.keyWords} />
      </Helmet>
      <Header/>
      <PageDescriptionC data={helper} />
      <PropertiesLoader properties={propertiesFilter} />
      <ContactC/>
    </>
  );
};

export default ProvincePage;
