import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [user, Setuser] = useState("");
  const [fullName, setFullName] = useState("");


  return(
    <AuthContext.Provider value={{user, Setuser}}>
      {children}
    </AuthContext.Provider>
  )
}


