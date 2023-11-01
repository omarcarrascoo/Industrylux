import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
function categoryFilter() {
  const [cat, setCategories] = useState([]);
  const {urlProvince, urlCountry, lan} = useParams();
  const [completeUrl, setCompleteUrl] = useState(false)
  const seof = lan == "es"? 
  "bienes-raices-industriales" : "industrial-real-estate"
      try {
        useEffect(() => {
          fetch(`https://industrylux.com/api/categories/pages`)
            .then(response => response.json())
            .then(data => setCategories(data))
        }, [urlCountry, urlProvince, lan]);
      } catch (error) {
        console.log(error);
      }
      // Puede mejorarse las veces que hace fetch de la información console.log(cat);

        useEffect(() =>{
          const setCategoryState = async ()=>{
            const provinceExist = await fetch(`https://industrylux.com/api/provinces/findByUrl/${urlProvince}`)
          console.log("provincias existentes");
          console.log(provinceExist);
          provinceExist === null || provinceExist == undefined ? setCompleteUrl(false) : setCompleteUrl(true)
          }

          setCategoryState()
        }, [urlProvince, urlCountry, lan])
      
        const categoriesLan = cat.filter(element => element.lenguage === lan);
  return (
    <>
      {/* <a>Categories </a>
                                <ul>
                                {categories
                                .filter(category => category.urlProvince === urlProvince &&  category.lenguage === lan)
                                .map(category =>(
                                <li key={category._id}>
                                            <Link to={`/${lan}/${seof}/${urlCountry}/${urlProvince}/${category.urlCategory}`}><a> {category.categoryTitle}</a></Link>
                                </li>
                                 ))}
                                </ul> */}

          {completeUrl === false? 
          <>
            <a>Categories </a>
                <ul className='categoryMenu'>
                  {categoriesLan.map(category =>(
                                  <li key={category._id}>
                                              <Link to={`/${lan}/${seof}/${urlCountry}/${urlProvince}/${category.urlCategory}`}><a> {category.categoryTitle}</a></Link>
                                  </li>
                                  ))}
                </ul>
          </>
          : 
          <>
          <a>Categories </a>
              <ul className='categoryMenu'>
                {categoriesLan.map(category =>(
                                <li key={category._id}>
                                            <Link to={`/${lan}/${seof}/${urlCountry}/${category.urlCategory}`}><a> {category.categoryTitle}</a></Link>
                                </li>
                                ))}
              </ul>
        </> 
        }
    </>
  )
}
export default categoryFilter
