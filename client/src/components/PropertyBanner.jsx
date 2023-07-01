import React from 'react'

function PropertyBanner({img}){
  // console.log(img);
  console.log(img);
  let lastElement = img[img.length - 1]
  console.log(lastElement);
  return (
    <div className="propertyBannerContainer">
        <img src={`http://localhost:1337/${lastElement}`} alt="" /> 
    </div>
  )
}

export default PropertyBanner
