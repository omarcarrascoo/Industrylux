import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
function categoryFilter() {
  const [cat, setCategories] = useState([]);
  const {urlProvince, urlCountry, lan} = useParams();
  const [completeUrl, setCompleteUrl] = useState(false)
  const [provinceExist, setProvinceExist] = useState([])
  const seof = lan == "es"? "bienes-raices-industriales" : "industrial-real-estate"
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    console.log("clicked");
    setIsClicked(!isClicked);
  };
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

            const setCategoryState = async () => {
              console.log(urlProvince);
              await fetch(`https://industrylux.com/api/provinces/findByUrlProvince/${urlProvince}`)
                .then((response) => { return response.json()})
                .then((data) => {
                  setProvinceExist(data);
                  setCompleteUrlFunction()
                });
            };
          
          const setCompleteUrlFunction = () =>{
            if (!provinceExist || (Array.isArray(provinceExist) && provinceExist.length === 0)) {
              setCompleteUrl(false);
            } else {
              setCompleteUrl(true);
            }
            
          }

          setCategoryState()
          
        }, [urlProvince, urlCountry, lan])
      
        const categoriesLan = cat.filter(element => element.lenguage === lan);
  return (
    <>
          {provinceExist.length > 0? 
          <>
            <a onClick={handleClick}>Categories </a>
                <ul className={isClicked ? 'activeMenu categoryMenu' : ''}>
                  {categoriesLan.map(category =>(
                                  <li key={category._id}>
                                              <Link to={`/${lan}/${seof}/${urlCountry}/${urlProvince}/${category.urlCategory}`}><a> {category.categoryTitle}</a></Link>
                                  </li>
                                  ))}
                </ul>
          </>
          : 
          <>
          <a onClick={handleClick}>Categories </a>
              <ul className={isClicked ? 'activeMenu categoryMenu' : ''}>
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
