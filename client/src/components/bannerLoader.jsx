import React from 'react'
function BannerLoader({img}) {
    const imgs = img
    const imgLink = `http://localhost:1337/${imgs}`
    console.log(imgLink);
  return (
    <div className='propertyBannerContainer'>
      <img src={imgLink} alt="" />
    </div>
  )
}

export default BannerLoader
