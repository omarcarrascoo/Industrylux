import React from 'react'
function BannerLoader({img}) {
    const imgs = img
    const imgLink = `https://industrylux.com/${imgs}`
    console.log(imgLink);
  return (
    <div className='bannerLoaderImg'>
      <img src={imgLink} alt="" />
    </div>
  )
}

export default BannerLoader
