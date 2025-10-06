import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear()

    const [userData, setUserData] = useState(null);

    // const data = getLocalStorage()
    // console.log(data.employees).

    // useEffect(() => {
    //   setLocalStorage()  //to run the function
    //   const {employees, admin} = getLocalStorage()
    //   setUserData({employees,admin})
      
    // },[]);

//=> this one is the alternate of the above useeffect and here we have removed  admin for betterment  

    useEffect(() => {
      setLocalStorage()  //to run the function
      const {employees} = getLocalStorage()
      setUserData(employees)
      
    },[]);

  return (
    <div>
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}

        </AuthContext.Provider> 
    </div>
  )
}

export default AuthProvider
