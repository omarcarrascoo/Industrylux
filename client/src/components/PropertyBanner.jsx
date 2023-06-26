import React from 'react'

function PropertyBanner({img}) {
  // console.log(img);
    const imgLink = `http://localhost:1337/${img}`
  return (
    <div className="propertyBannerContainer">
        <img src={imgLink} alt="" />
    </div>
  )
}

export default PropertyBanner
