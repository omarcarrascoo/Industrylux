import React from 'react'

function PropertyBanner({img}){
  let lastElement = img[img.length - 1]
  return (
    <div className="propertyBannerContainer">
        <img src={`https://industrylux.com/${lastElement}`} alt="" /> 
    </div>
  )
}

export default PropertyBanner
