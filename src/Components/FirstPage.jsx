import { ArrowSwitch , ArrowSwitchLeft } from "../Public/Svgs";
import { useState } from "react";

const Firstpage = () => {

  const [ads , setAds] = useState([
    {
      id : 1,
      pic : "../src/Pics/chapeau.jpg"
    },
    {
      id : 2,
      pic : "../src/Pics/EleganzaChic.png"
    },
    {
      id : 3,
      pic : "../src/Pics/a.jpg"
    },
    {
      id : 4,
      pic : "../src/Pics/wol.jpg"
    },
    {
      id : 5,
      pic : "../src/Pics/a.jpg"
    }
  ])
  const [currentAd , setCurrentAd] = useState(0)

  return (
    <div className="w-calc(100% - 44px) mx-10 my-5 flex gap-4 flex-col md:flex-row justify-start items-center">
      <div className="relative md:w-[65%] w-full md:h-[416px] h-[226px] smal:h-[276px] lil:h-[316px]">
        <button onClick={()=>{
          if(currentAd === ads.length-1){
            setCurrentAd(0)
          }
          else{
            setCurrentAd(currentAd+1)
          }
        }} className="absolute right-1 top-[50%]">
            <ArrowSwitch />
        </button>
        <button onClick={()=>{
          if(currentAd === 0){
            setCurrentAd(ads.length-1)
          }
          else{
            setCurrentAd(currentAd-1)
          }
        }} className="absolute left-1 top-[50%]">
            <ArrowSwitchLeft />
        </button>
        <img
          className="bg-cover duration-100 ease-in-out w-full h-full object-cover"
          src={ads[currentAd].pic}
          alt=""
        />
      </div>
      <div className="md:w-[35%] w-full flex flex-row md:flex-col gap-4">
        <div className="w-[370px] h-[156px] smal:h-[200px]">
          <img
            className="bg-cover h-full w-full object-cover "
            src="./src/Pics/kid.jpg"
            alt=""
          />
        </div>
        <div className="w-[370px] h-[156px] smal:h-[200px]">
          <img
            className="bg-cover w-full h-full"
            src="./src/Pics/shoe.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Firstpage;