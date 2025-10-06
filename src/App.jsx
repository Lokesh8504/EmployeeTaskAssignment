import React, { use, useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './Context/AuthProvider';


const App = () => {
  // useEffect(() => {
  //   // setLocalStorage()  //to run the function
  //   getLocalStorage()
  
  // });

  const [user, setUser] = useState(null);
  const [logedInUserData, setLogedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext)
  // console.log(authData.employees)

  // useEffect(() => {
  //   if(authData){
  //     const logedInUser = localStorage.getItem('logedInUser')
  //     if(logedInUser){
  //       setUser(logedInUser.role)
  //     }
  //   }
  // }, [authData]);

  // try again vala 

  useEffect(() => {
    const logedInUser = localStorage.getItem('logedInUser')
    if(logedInUser){
      // console.log("user loged in ")
      const userData = JSON.parse(logedInUser)
      // console.log(userData)
      setUser(userData.role)
      setLogedInUserData(userData.data)

    }
  },[]);

  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password == '123'){
      // console.log('this is admin')
      setUser('admin')
      // console.log(user)
      localStorage.setItem('logedInUser', JSON.stringify({role: 'admin'}))
    }
    // else if(email == 'user@me.com' && password == '123'){
    //   // console.log('this is user')
    //   setUser('employee')
    // }
    else if(userData){
      const employee = userData.find((e) => e.email == email && e.password == password)  //find the email and password in employees array
      if(employee){
        setUser('employee')
        setLogedInUserData(employee)
        localStorage.setItem('logedInUser', JSON.stringify({role: 'employee', data:employee}))

      }
    }

    else{
      alert("invalide credentials !!")
    }
  }
  // handleLogin()

  

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}  {/* if there is no user then show login page or if there is user then don't login*/}
    {user == 'admin' ? <AdminDashboard changeUser={setUser}/> :  (user=='employee' ? <EmployeeDashboard changeUser={setUser} data = {logedInUserData}/> : null)}  {/* if user is admin then show admin dashboard otherwise show employee dashboard */ }
    {/* <Login/> */}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}

    </>
  )
}

export default App
