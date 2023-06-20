import React from 'react'

function PropertyBanner({img}) {
  // console.log(img);
    const imgLink = `http://143.110.234.115/${img}`
  return (
    <div className="propertyBannerContainer">
        <img src={imgLink} alt="" />
    </div>
  )
}

export default PropertyBanner
