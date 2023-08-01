import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
function categoryFilter({categories, urlProvince, urlCountry}) {
  const [cat, setCategories] = useState([]);
  const {lan}= useParams()
    if (categories) {
      try {
        useEffect(() => {
          fetch(`http://localhost:1337/api/categories/pages`)
            .then(response => response.json())
            .then(data => setCategories(data))
        }, [urlCountry]);
      } catch (error) {
        console.log(error);
        categories = 0
      }
      categories = cat
    }

  return (
    <>
      <a>Categories </a>
                                <ul>
                                {categories
                                .filter(category => category.urlProvince === urlProvince &&  category.lenguage === lan)
                                .map(category =>(
                                <li key={category._id}>
                                            <Link to={`/es/${urlCountry}/${urlProvince}/${category.urlCategory}`}><a> {category.categoryTitle}</a></Link>
                                </li>
                                 ))}
                                </ul>
    </>
  )
}
export default categoryFilter
