
import './App.css'
import { RiHeartFill, RiChat3Line,RiCloseLine } from "@remixicon/react";
import userData from './userData';
import { useRef, useState } from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);

function App() {
  let [currentVal,setCurrentVal]=useState(0);
  let [isAnimating,setAnimating]=useState(false)
  console.log(userData[currentVal]);

const mainContainer=useRef();
function reject(){
  
  if(!isAnimating){
    setAnimating(true)
   if(currentVal<userData.length){
    currentVal++;
    setCurrentVal(currentVal)
    const tl=gsap.timeline({
      onComplete:()=>{
        setAnimating(false)
      }
    });
    tl.from(".mainImage img",{
    opacity:0,
     duration:1
  });
  tl.from(".element",{
    y:20,
    opacity:0,
     duration:.8,
  })
  if(currentVal===userData.length){
    setCurrentVal(0)
  }
  } 
}
}    


//accept button
function accept(){
  if(!isAnimating){
    setAnimating(true)
   if(currentVal<userData.length){
    currentVal++;
    setCurrentVal(currentVal)
    const tl=gsap.timeline({
      onComplete:()=>{
        setAnimating(false)
      }
    });
    tl.from(".mainImage img",{
    opacity:0,
     duration:1
  });
  tl.from(".element",{
    y:20,
    opacity:0,
     duration:.8,
  })
  if(currentVal===userData.length){
    setCurrentVal(0)
  }
  } 
}
  
}
 
  
   
//     useGSAP(()=>{
 
// },{scope:mainContainer});

    // console.log("hello")
    // if(currentVal<userData.length-1){
    //   currentVal++;
    //   console.log(currentVal)
    //   setCurrentVal(currentVal)
   
   
  return (
    <>
       <div ref={mainContainer} className="main w-full h-screen relative text-white md:flex md:justify-center md:items-center">
            <div className="contentContainer relative w-full h-screen bg-green-500 md:w-[450px] md:bg-black md:h-[95%]">
              <div className='incomingImage w-full h-full bg-gray-300 absolute z-[1] top-0 left-0 '>
              <img className='w-full h-full object-cover' 
                src alt='React Logo' />
              </div>
              <div className='mainImage w-full h-full bg-gray-800 absolute z-[2] top-0 left-0'>
                <img className='w-full h-full object-cover' 
                src={userData[currentVal].displayImage} alt='React Logo' />
              </div>
              <div className="imageDetails w-full h-full flex flex-col justify-between absolute left-0 top-0 z-[3]">
                 <nav className='w-full p-4 flex justify-between items-center'>
                  <div className="profileImg w-[3.7rem] h-[3.7rem]">
                    <img className='w-full h-full object-cover rounded-full' src={userData[currentVal].profilePic} alt="" />
                  </div>
                  <h1 className='font-medium text-lg'>They Liked You</h1>
                  <div className="flex items-center justify-center msgs w-[3.7rem] h-[3.7rem] rounded-full bg-white/30">
                    <RiChat3Line/>
                  </div>
                 </nav>
                 <section className="w-full">
                    <div className="imageDetails p-4 flex flex-col gap-3">
                      <div className="element adrees">{userData[currentVal].adress}</div>
                      <div className="element name font-medium text-6xl">{userData[currentVal].name} <span className='font-medium text-6xl opacity-80'>{userData[currentVal].age}</span></div>
                      <div className="musicNwriting flex gap-2">
                          <div className="element music font-medium text-lg px-6 py-1 bg-white/20 rounded-full">{userData[currentVal].interest[0]}</div>
                        <div className="element writing  font-medium text-lg px-6  py-1 bg-white/20 rounded-full">{userData[currentVal].interest[1]}</div>
                      </div>  
                        <div className="element bio font-medium text-xl">Bio</div>
                        <div className="element about">{userData[currentVal].bio}</div>
                        <div className="buttons flex gap-4 px-2">
                          <button onClick={reject} className='element w-1/2 py-2 rounded-md text-2xl bg-white text-black outline-none flex items-center justify-center'><RiCloseLine/></button>
                          <button onClick={accept} className='element w-1/2 py-2 rounded-md text-2xl  bg-[#C33C36] outline-none text-center flex items-center justify-center'><RiHeartFill/></button>
                        </div>
                    </div>
                 </section>
              </div>
            </div>
       </div>
    </>
  )

}
export default App
