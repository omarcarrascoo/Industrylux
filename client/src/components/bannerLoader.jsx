import React from 'react'
function BannerLoader({img}) {
    const imgs = img
    const imgLink = `http://174.138.95.49:1337/${imgs}`
    console.log(imgLink);
  return (
    <div className='bannerLoaderImg'>
      <img src={imgLink} alt="" />
    </div>
  )
}

export default BannerLoader
