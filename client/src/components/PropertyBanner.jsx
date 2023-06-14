import React from 'react'

function PropertyBanner({img}) {
  // console.log(img);
    const imgLink = `https://industrylux.com/${img}`
  return (
    <div className="propertyBannerContainer">
        <img src={imgLink} alt="" />
    </div>
  )
}

export default PropertyBanner
