import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
function categoryFilter() {
  const [cat, setCategories] = useState([]);
  const {urlProvince, urlCountry, lan} = useParams();
  const seof = lan == "es"? "bienes-raices-industriales" : "industrial-real-estate"
      try {
        useEffect(() => {
          fetch(`https://industrylux.com/api/categories/pages`)
            .then(response => response.json())
            .then(data => setCategories(data))
        }, [urlCountry, urlProvince, lan]);
      } catch (error) {
        console.log(error);
      }
      console.log(cat);
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

          {urlProvince?  
          <>
            <a>Categories </a>
                <ul>
                  {cat.map(category =>(
                                  <li key={category._id}>
                                              <Link to={`/${lan}/${seof}/${urlCountry}/${urlProvince}/${category.urlCategory}`}><a> {category.categoryTitle}</a></Link>
                                  </li>
                                  ))}
                </ul>
          </>
          : 
          <>
          <a>Categories </a>
              <ul>
                {cat.map(category =>(
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
