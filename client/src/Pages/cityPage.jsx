    import { useState, useEffect } from 'react';
    import { useParams } from 'react-router-dom';
import Header from '../components/Header';
    import PageDescriptionC from '../components/PageDescriptionC';
import PropertiesLoader from '../components/propertiesLoader';

  const ProvincePage = () => {
  const { urlProvince, lan } = useParams();
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState([]);

  const fetchProperties = () => {
    fetch(`http://localhost:1337/api/industrialProperties/findByProvince/${urlProvince}`)
      .then(response => response.json())
      .then(data => setProperties(data));
  };

  const fetchPage = () => {
    fetch(`http://localhost:1337/api/provinces/findByUrl/${urlProvince}`)
      .then(response => response.json())
      .then(data => setPage(data[0]));
  };

  useEffect(() => {
    fetchProperties();
    fetchPage();
  }, [urlProvince]);
  const propertiesFilter = properties.filter(element => element.lenguage === lan);
  return (
    <>
      <Header/>
      <PageDescriptionC data={page} />
      <PropertiesLoader properties={propertiesFilter} />
    </>
  );
};

export default ProvincePage;
