import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  MoonIcon ,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
  SunIcon,
} from "@heroicons/react/outline";
import { Fragment, useContext, useState } from "react";
import Modal from "../Modal";
import Upload from "../Upload";
import ThemeContext from "@/context/ThemeContext";

function Header({addTheme}) {
  const [showModal, setShowModal] = useState(false);
  const theme = useContext(ThemeContext);


  const handleTheme=()=>{
    addTheme(!theme)
  }


  return (
    <div className={`shadow-md border-b bg-white sticky top-0 z-50 text-black ${theme ? 'dark:bg-black dark:text-white dark:border-zinc-900' : ''}`}>
      {/* Left starts */}
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {theme ? (
         <div className="relative inline-grid w-24 cursor-pointer ">
         <Image
           src="/logo.png"
           layout="fill"
           objectFit="contain"
         />
       </div>
        ) : (
          <div className="relative inline-grid w-24 cursor-pointer ">
          <Image
            src="/logo-white.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
          
        )}
       
        {/* Left ends */}

        {/* Middle starts search-input*/}
        <div className='max-w-xs'>
        <div className='relative mt-1 p-3 rounded-md'>
          <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
            <SearchIcon className='h-5 w-5 text-gray-500'/>
          </div>
          <input className={`bg-gray-50 block w-full pl-10 sm:text-sm
          border-gray-300 focus:ring-slate-300 focus:border-slate-400 rounded-md ${theme ? 'dark:bg-zinc-900 dark:border-none' : ''}`} type="text" placeholder="Search" />
        </div>
        </div>
        {/* Middle ends search-input */}

        {/* Right */}
        <div className='flex items-center justify-end space-x-4'>
        <HomeIcon className='itemsBtn'/>
        
        <Fragment>
        <PlusCircleIcon className="itemsBtn" onClick={()=>setShowModal(true)}/>
        <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
          <Upload></Upload>
        </Modal>
        </Fragment>
        
        {/* This MenuIcon doesn't works but I'm going to add the implementation */}
        <MenuIcon className='h-6 sm:hidden cursor-pointer'/>
        <div className='relative itemsBtn'>
        <PaperAirplaneIcon className="itemsBtn rotate-45"/>
        {/* Here we can add dynamic notifications if we want it */}
          <div className='absolute -top-2 -right-3 text-xs w-5 h-5
          bg-red-500 rounded-full flex items-center 
          justify-center animate-pulse text-white' >3</div>
        </div>
        <UserGroupIcon className="itemsBtn" />
        {theme ? (
          <SunIcon  className="itemsBtn" onClick={handleTheme}/>
        ):(
          <MoonIcon  className="itemsBtn" onClick={handleTheme}/>
        )}
        
        {/* Here we gonna add the profile photo with the API */}
        <img src='https://imgs.search.brave.com/r_AOF16zDVYdBgie8b-FGNDWIVxrbBlcz4M1t4P6IAs/rs:fit:735:929:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC9kNi9jNi84MC9k/NmM2ODA1Zjk4YmYz/YTkyZjI1YWVkM2U1/ODUyOTI0OC5qcGc' 
        width='40px'
        height='40px'
        alt='profile' className="h-10 rounded-full cursor-pointer hidden sm:inline-grid" />
        </div>
      </div>
    </div>
  );
}

export default Header;
