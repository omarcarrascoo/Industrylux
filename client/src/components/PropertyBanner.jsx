import React from 'react'

function PropertyBanner({img}) {
    const imgLink = `http://174.138.95.49/assets/images/${img}`
    console.log(imgLink);
  return (
    <div className="propertyBannerContainer">
        <img src={imgLink} alt="" />
    </div>
  )
}

export default PropertyBanner
