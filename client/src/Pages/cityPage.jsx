    import { useState, useEffect } from 'react';
    import { useParams } from 'react-router-dom';
import Header from '../components/Header';
    import PageDescriptionC from '../components/PageDescriptionC';
import PropertiesLoader from '../components/propertiesLoader';
import PropertyBanner from '../components/PropertyBanner';

  const ProvincePage = () => {
  const { urlProvince, lan } = useParams();
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState([]);

  const fetchProperties = () => {
    fetch(`https://industrylux.com/api/industrialProperties/findByProvince/${urlProvince}`)
      .then(response => response.json())
      .then(data => setProperties(data));
  };

  const fetchPage = () => {
    fetch(`https://industrylux.com/api/provinces/findByUrl/${urlProvince}`)
      .then(response => response.json())
      .then(data => setPage(data[0]));
  };

  useEffect(() => {
    fetchProperties();
    fetchPage();
  }, [urlProvince]);
  const propertiesFilter = properties.filter(element => element.lenguage === lan);
  console.log("datos desarroolo")
  console.log(page)
  const data = page && page[0] ? page[0] : page
  console.log(data);
  return (
    <>
      <Header/>
      <section className='bannerCountry'>
        <PropertyBanner img={data.imgCover} />
      </section>
      <PageDescriptionC data={data} />
      <PropertiesLoader properties={propertiesFilter} />
    </>
  );
};

export default ProvincePage;
