

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageDescriptionC from '../components/PageDescriptionC';
import PropertiesLoader from '../components/propertiesLoader';
import { Helmet } from 'react-helmet';
const ProvincePage = () => {
  const { urlProvince } = useParams();
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState([]);

  const fetchProperties = () => {
    fetch(`http://174.138.95.49:1337/api/industrialProperties/findByProvince/${urlProvince}`)
      .then(response => response.json())
      .then(data => setProperties(data));
  };

  const fetchPage = () => {
    fetch(`http://174.138.95.49:1337/api/provinces/findByUrl/${urlProvince}`)
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
      <PageDescriptionC data={page} />
      <PropertiesLoader properties={properties} />
    </>
  );
};

export default ProvincePage;
