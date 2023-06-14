import React from 'react'

function PropertyBanner({img}) {
  // console.log(img);
    const imgLink = `http://174.138.95.49:1337/${img}`
  return (
    <div className="propertyBannerContainer">
        <img src={imgLink} alt="" />
    </div>
  )
}

export default PropertyBanner
