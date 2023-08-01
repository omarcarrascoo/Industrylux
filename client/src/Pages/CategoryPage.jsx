import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import PageDescriptionC from '../components/PageDescriptionC';
import PropertiesLoader from '../components/propertiesLoader';

const CategoryPage = () => {
  const { urlProvince, category1, lan } = useParams();
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState([]);
  const [categoryPage, setCategoryPage] = useState(null)
  const [cityPage, setCityPage] = useState([])

  
  const fetchByCategory = () => {
    try {
      fetch(`http://localhost:1337/api/categories/findPageProvinceCategory/${urlProvince}/${category1}`)
      .then(response => response.json())
      .then(data => setCategoryPage(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchByCity = () =>{
    try {
      fetch(`http://localhost:1337/api/cities/findByName/${category1}`)
       .then(response => response.json())
       .then(data => setCityPage(data));
    } catch (error) {
      console.log(error);
    }
  }

  const fetchProperties = () => {
    fetch(`http://localhost:1337/api/industrialProperties/findByProvince/${urlProvince}`)
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
        setPage(cityPage);
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

  const filteredPage= page.length >1 ? page.filter(element => element.lenguage === lan) : [page];

  
  console.log("Pagina filtrada por lenguaje:");
  console.log(filteredPage);
  console.log("CATEGORIA");
  console.log(category1);
  console.log("Procincia url");
  console.log(urlProvince);
  console.log("Properties");
  console.log(properties);
  console.log("Category Page");
  console.log(categoryPage);
  console.log("City Page")
  console.log(cityPage);
  console.log("Page");
  console.log(page);
  console.log(page.length);
  console.log("Filter properties");
  console.log(propertycategory);

  return (
    <>
      <Header/>
      <PageDescriptionC data={filteredPage[0]} />
      <PropertiesLoader properties={propertycategory} />
    </>
  );
};

export default CategoryPage;