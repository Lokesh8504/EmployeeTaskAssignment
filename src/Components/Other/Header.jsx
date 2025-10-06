import React, { useState } from 'react'

const Header = (props) => {
  // console.log(data)

  // const [username, setUsername] = useState('');

  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }

let username = 'Admin'; //default username
const logedInUser = localStorage.getItem('logedInUser'); //get the logedInUser from local storage
if(logedInUser){ 
  try{ //to avoid the error if the logedInUser is not a valid JSON
    const parsed = JSON.parse(logedInUser); //parse the logedInUser to get the object
    if(parsed.data && parsed.data.firstName){  //check if the data and firstName exist in the parsed object
      username = parsed.data.firstName;  //set the username to the firstName of the logedInUser
    }
  } catch(e){  //if error occurs in try block
    // fallback to default username which is Admin 
  }
  }

  const logOutUser = () => { 
//=> to logOut
    
    // localStorage.setItem('logedInUser', '') //clear the logedInUser from local storage
    // localStorage.removeItem('logedInUser')   //you can use this one too and its more efficient as it remove the user rather then empty a string
    // window.location.reload() //reload the page
    
    
//=> we can do this as well to logout 
    // console.log(props.changeUser)
    localStorage.setItem('logedInUser', '') //clear the logedInUser from local storage
    props.changeUser('')  //it will set the logedInUser to empty string which fulfill the first condtion in app.jsx of login page
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>hello <br /> <span className='text-3xl font-semibold'>{username} 👋</span> </h1>
      <button onClick={logOutUser} className='bg-red-500 text-lg font-semibold px-5 py-2 rounded-sm hover:bg-red-600'>Log out</button>
    </div>
  )
}

export default Header
