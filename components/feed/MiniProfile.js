import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";



function MiniProfile() {
  const {user, avatar,fullName} = useContext(AuthContext)
  const router = useRouter();
  const [username, setUser] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  
  const handleClick = async (e) => {
    e.preventDefault();
    Cookies.remove('token');
    localStorage.setItem('userLocalStorage', '');
    localStorage.setItem('photoLocalStorage', '');
    router.push('/');
  }

  useEffect(() => {
    setUser(user)
    setImage(avatar)
    setName(fullName)
  }, []);


  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img className='rounded-full border p-[2px] w-16 h-16' src={image} alt="profile"
        />
        <div className="flex-1 mx-4">
        <h2 className='font-bold'>{username}</h2>
            <h3 className='text-sm text-gray-400'> {name}</h3>
        </div>
        <button onClick={handleClick} className='text-blue-400 text-sm font-semibold' >Sign Out</button>
    </div>
  )
}

export default MiniProfile;
