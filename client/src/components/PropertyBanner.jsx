import React from 'react'

function PropertyBanner({img}){
  const data = img && img[0] && img[0].imgCover ? img[0].imgCover : img;
  console.log(data);

  return (
    <div className="propertyBannerContainer">
        <img src={data} alt="" /> 
    </div>
  )
}

export default PropertyBanner
