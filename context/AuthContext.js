import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  
  
  const [user, setUser] = useState(()=>{
    try {
      const userLocalStorage = localStorage.getItem('userStorage')
      return userLocalStorage ? JSON.parse(userLocalStorage) : '';
    } catch (error) {
      return '';
    }
  });
  const [avatar, setAvatarr] = useState(()=>{
    try {
      const photoLocalStorage = localStorage.getItem('photoStorage')
      return photoLocalStorage ? JSON.parse(photoLocalStorage) : '';
      
    } catch (error) {
      return '';
    }
  });
  const [fullName, setFullName] = useState(()=>{
    try {
      const photoLocalStorage = localStorage.getItem('fullNameStorage')
      return photoLocalStorage ? JSON.parse(photoLocalStorage) : '';
      
    } catch (error) {
      return '';
    }
  });
  
  useEffect(() =>{
    localStorage.setItem('userStorage', JSON.stringify(user));
  },[user]);

  useEffect(() =>{
    localStorage.setItem('photoStorage', JSON.stringify(avatar));
  },[avatar]);

  useEffect(() =>{
    localStorage.setItem('fullNameStorage', JSON.stringify(fullName));
  },[fullName]);





  return(
    <AuthContext.Provider value={{user,setUser, avatar, setAvatarr, fullName,setFullName}}>
      {children}
    </AuthContext.Provider>
  )
}


