import React from 'react'
import { Link } from 'react-router-dom';
function categoryFilter({categories, urlProvince, urlCountry}) {

    console.log(categories);
  return (
    <>
      <a>Categories </a>
                                <ul>
                                {categories.map(category =>(
                                <li key={category._id}>
                                            <Link to={`es/${urlCountry}/${urlProvince}/${category.urlCategory}`}><a> {category.categoryTitle}</a></Link>
                                </li>
                                 ))}
                                </ul>
    </>
  )
}
export default categoryFilter
