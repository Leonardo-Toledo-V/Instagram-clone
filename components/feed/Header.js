import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
  HomeIcon,
  HeartIcon,
  LogoutIcon
} from "@heroicons/react/outline";
import { Fragment, useContext, useEffect, useState } from "react";
import Modal from "../Modal";
import Upload from "../Upload";
import { AuthContext } from "@/context/AuthContext";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const {avatar} = useContext(AuthContext);
  const router = useRouter();

  const [image, setImage] = useState('');
  useEffect(() => {
    setImage(avatar);
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    Cookies.remove('token');
    localStorage.setItem('userLocalStorage', '');
    localStorage.setItem('photoLocalStorage', '');
    router.push('/');
  }

  return (
    <div className='shadow-md border-b bg-white sticky top-0 z-50 text-black '>
      {/* Left starts */}
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
          <div className="relative inline-grid w-24 cursor-pointer ">
          <Image
            src="/logo-white.png"
            layout="fill"
            objectFit="contain"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="logo"
          />
        </div>
 
        {/* Left ends */}

        {/* Middle starts search-input*/}
        <div className='max-w-xs'>
        <div className='relative mt-1 p-3 rounded-md'>
          <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
            <SearchIcon className='h-5 w-5 text-gray-500'/>
          </div>
          <input className='bg-gray-50 block w-full pl-10 sm:text-sm
          border-gray-300 focus:ring-slate-300 focus:border-slate-400 rounded-md' type="text" placeholder="Search" />
        </div>
        </div>
        {/* Middle ends search-input */}

        {/* Right */}
        <div className='flex items-center justify-end space-x-4'>
        <HomeIcon className='itemsBtn'/>
        
        <Fragment>
        <PlusCircleIcon className="itemsMovil" onClick={()=>setShowModal(true)}/>
        <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
          <Upload></Upload>
        </Modal>
        </Fragment>
        <div className='relative itemsBtn'>
        <PaperAirplaneIcon className="itemsBtn rotate-45"/>
        {/* Here we can add dynamic notifications if we want it */}
          <div className='absolute -top-2 -right-3 text-xs w-5 h-5
          bg-red-500 rounded-full flex items-center 
          justify-center animate-pulse text-white' >3</div>
        </div>
        <UserGroupIcon className="itemsBtn"/>
        <HeartIcon className="itemsBtn"/>
        <LogoutIcon className="logout" onClick={handleLogout}/>
        
        {/* Here we gonna add the profile photo with the API */}
        <img src={image} 
        width='40px'
        height='40px'
        alt='profile' className="h-10 rounded-full cursor-pointer hidden sm:inline-grid" />
        </div>
      </div>
    </div>
  );
}

export default Header;
