import React, { useState } from 'react'
import { IoAttachSharp } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';




const Home = () => {
  const [ischatMsgFull, setchatMsgFull] = useState(false);
  const[showSettingAnimation,setShowSettingAnimation]=useState(false);

  const toggleScreen = () => {
    console.log("double click detected")
    setchatMsgFull(!ischatMsgFull);
  }

  const handleFileChange=(event)=>{
    const file=event.target.files[0];
    console.log('selected file : ',file);

  };

  const showAnimation=()=>{
    setShowSettingAnimation(true);
    setTimeout(() => {
      setShowSettingAnimation(false);
    }, 1000);
  }
  return (
    <>
    <Navbar/>
      <div className="chatUI flex  " style={{ height: 'calc(100vh - 6rem)' }}>
        <div className={`chatHistory flex-none w-1/4 bg-chatHistory p-4 border-0 hidden md:block ${ischatMsgFull ? 'hidden' : ''}`} >
          
        </div>
        <div onDoubleClick={toggleScreen} className="chatMsg flex-1 flex  flex-col bg-chatMsg p-4 justify-center items-center border-0 ">
          <div className="flex"></div>
          
          <div className='w-full flex items-center justify-center  mt-auto mb-6  '>
            <label htmlFor="fileInput">
            <IoAttachSharp onClick={showAnimation} className="text-gray-600 bg-white mb-6 -mr-2 border border-radius-4 p-2 cursor-pointer" size={48} style={{ borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px' }} />
            </label>
            <input
                id="fileInput"
                type="file"
                accept=".jpg, .jpeg, .png, .gif"
                className="hidden"
                onChange={handleFileChange}
              />
            <input type="text" placeholder='Enter Message' className='w-full rounded-md mt-auto mb-6 px-4 py-2 outline-none  border-gray-300  ' style={{ maxWidth: '44rem', minWidth: '10rem',minHeight:'3rem' }} />
            {showSettingAnimation?(
              <button>
          <IoSettingsOutline className=' settings-icon text-black bg-white -ml-7 -mt-6 ' size={21} style={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }}/>
          <IoSettingsOutline className=' settings-icon2 text-black bg-white -ml-7 -mt-0.8 ' size={12} style={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }} />
          </button>
            ):(
              <button onClick={showAnimation}>
            <IoMdSend className='bg-white mb-6 -ml-2  p-2 cursor-pointer 'size={48}style={{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }}/>
            </button>
            )}
            
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Home