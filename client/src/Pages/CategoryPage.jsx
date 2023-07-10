import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import PageDescriptionC from '../components/PageDescriptionC';
import PropertiesLoader from '../components/propertiesLoader';

const CategoryPage = () => {
  const { urlProvince, category1 } = useParams();
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState([]);

  console.log(category1);
  console.log(urlProvince);
  const fetchPage = () => {
    fetch(`https://industrylux.com/api/categories/findPageProvinceCategory/${urlProvince}/${category1}`)
      .then(response => response.json())
      .then(data => setPage(data));
  };
  const fetchProperties = () => {
    fetch(`https://industrylux.com/api/industrialProperties/findByProvince/${urlProvince}`)
      .then(response => response.json())
      .then(data => setProperties(data));
  };
  useEffect(() => {
    fetchProperties();
    fetchPage();
  }, [urlProvince, category1]);
  console.log(page);
  console.log(properties);
  const propertycategory = properties.filter(element => element.urlCategory === category1)
  return (
    <>
      <Header/>
      <PageDescriptionC data={page} />
      <PropertiesLoader properties={propertycategory} />
    </>
  );
};

export default CategoryPage;