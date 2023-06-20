

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageDescriptionC from '../components/PageDescriptionC';
import PropertiesLoader from '../components/propertiesLoader';
import { Helmet } from 'react-helmet';
import ContactC from '../components/ContactC';
import Header from '../components/Header';
const ProvincePage = () => {
  const { urlProvince } = useParams();
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState([]);

  const fetchProperties = () => {
    fetch(`http://143.110.234.115/api/industrialProperties/findByProvince/${urlProvince}`)
      .then(response => response.json())
      .then(data => setProperties(data));
  };

  const fetchPage = () => {
    fetch(`http://143.110.234.115/api/provinces/findByUrl/${urlProvince}`)
      .then(response => response.json())
      .then(data => setPage(data[0]));
  };

  useEffect(() => {
    fetchProperties();
    fetchPage();
  }, [urlProvince]);

  return (
    <>
      <Helmet>
            <title>{page.titleTag}</title>
            <meta name='description' content={page.metaDescription} />
            <meta name='keywords' content={page.keyWords} />
      </Helmet>
      <Header/>
      <PageDescriptionC data={page} />
      <PropertiesLoader properties={properties} />
      <ContactC/>
    </>
  );
};

export default ProvincePage;
