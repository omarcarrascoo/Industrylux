import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import PageDescriptionC from '../components/PageDescriptionC';
import PropertiesLoader from '../components/propertiesLoader';
import PropertyBanner from '../components/PropertyBanner';
const CategoryPage = () => {
  const { urlProvince, category1, lan } = useParams();
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(null);
  const [categoryPage, setCategoryPage] = useState(null)
  const [cityPage, setCityPage] = useState([])

  
  const fetchByCategory = () => {
    try {
      fetch(`https://industrylux.com/api/categories/findPageProvinceCategory/${urlProvince}/${category1}`)
      .then(response => response.json())
      .then(data => setCategoryPage(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchByCity = () =>{
    try {
      fetch(`https://industrylux.com/api/cities/findByName/${category1}`)
       .then(response => response.json())
       .then(data => setCityPage(data));
    } catch (error) {
      console.log(error);
    }
  }

  const fetchProperties = () => {
    fetch(`https://industrylux.com/api/industrialProperties/findByProvince/${urlProvince}`)
      .then(response => response.json())
      .then(data => setProperties(data));
  };

  // const pageSetting = () =>{
  //   if (categoryPage == 0) {
  //     setPage(cityPage)
  //   } else {
  //     console.log("Le alterno si funciona");
  //     setPage(categoryPage)
  //   }
  // }

  useEffect(() => {
    fetchProperties();
    fetchByCategory();
    fetchByCity();

  }, [urlProvince, category1]);
  useEffect(() => {
    const pageSetting = () => {
      if (categoryPage == null) {
        setPage(...cityPage);
      } else {
        console.log("Le alterno si funciona");
        setPage(categoryPage);
      }
    };
  
    pageSetting();
  }, [categoryPage, cityPage]);

  
  var propertycategory = properties.filter(element => element.urlCategory === category1)
  if (propertycategory == 0) {
    propertycategory = properties.filter(element => element.urlCity === category1)
  }


  const filteredPage= page && page.length >1 ? page.filter(element => element.lenguage === lan) : [page];
  const image = filteredPage[0];
  console.log(filteredPage);
  return (
    <>
      <Header/>
      <section className='bannerCountry'>
      {/* {filteredPage && filteredPage.length > 0 && (
          <PropertyBanner img={image} />
        )} */}

      </section>
      <PageDescriptionC data={filteredPage[0]} />
      <PropertiesLoader properties={propertycategory} />
    </>
  );
};

export default CategoryPage;