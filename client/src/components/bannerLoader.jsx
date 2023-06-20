import React from 'react'
function BannerLoader({img}) {
    const imgs = img
    const imgLink = `http://143.110.234.115/${imgs}`
    console.log(imgLink);
  return (
    <div className='bannerLoaderImg'>
      <img src={imgLink} alt="" />
    </div>
  )
}

export default BannerLoader
