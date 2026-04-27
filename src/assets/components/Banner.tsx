/* eslint-disable */
import { useEffect, useState } from 'react'
import './banner.css'

type bannertype={
    bannerproducts:any;
}
const Banner = ({bannerproducts}: bannertype) => {

    const [bannerimg, setbannerimg]= useState <string[]>([])
    const [index, setIndex]= useState<number>(0)

    //image loading
    useEffect(()=>{
if(bannerproducts.length>0){
const thumbimgs=bannerproducts.map((thumbimg:any)=> thumbimg.thumbnail)
    .slice(0,10);
    setbannerimg(thumbimgs);
}

    },[bannerproducts])


    useEffect(()=>{
if(bannerimg.length===0) return;
      setInterval(()=>{
setIndex((prev)=>(prev+1)%bannerimg.length)

      },3000)

    },[bannerimg])
    
  return (
    <div>
      
      <img className="image" src={bannerimg[index]}/>
    </div>
  )
}

export default Banner