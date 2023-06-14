import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageDescriptionC from '../components/PageDescriptionC';
import PropertiesLoader from '../components/propertiesLoader';

const CategoryPage = () => {
  const { urlProvince, category1 } = useParams();
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState([]);

  const fetchPage = () => {
    fetch(`http://174.138.95.49:1337/api/categories/findPageProvinceCategory/${urlProvince}/${category1}`)
      .then(response => response.json())
      .then(data => setPage(data));
  };
  const fetchProperties = () => {
    fetch(`http://174.138.95.49:1337/api/industrialProperties/findByProvince/${urlProvince}`)
      .then(response => response.json())
      .then(data => setProperties(data));
  };
  useEffect(() => {
    fetchProperties();
    fetchPage();
  }, [urlProvince, category1]);
  console.log(page);
  return (
    <>
      <PageDescriptionC data={page} />
      <PropertiesLoader properties={properties} />
    </>
  );
};

export default CategoryPage;