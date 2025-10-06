import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {

    // const authData = useContext(AuthContext)
    // console.log(authData.employees)

    const [userData, setUserData] = useContext(AuthContext)


  return (
    <div id='taskAll' className='bg-[#1c1c1c] p-5 mt-5 rounded  '>

        <div className='bg-red-400 mb-2 flex justify-between px-4 py-2 rounded'>
            <h2 className=' w-1/5 '>Name</h2>
            <h2 className=' w-1/5 '>New Task</h2>
            <h5 className=' w-1/5 '>Active Task</h5>
            <h5 className=' w-1/5 '>Completed</h5>
            <h5 className=' w-1/5 '>Failed</h5>
        </div>
         
        <div className='h-[100%]'>
        {userData.map(function(elem, idx){

            return <div key={idx} className='border-2 border-emerald-400 mb-2 flex justify-between px-4 py-2 rounded '>
            <h2 className=' w-1/5 '>{elem.firstName}</h2>
            <h2 className=' w-1/5 '>{elem.taskCounts.newTask}</h2>
            <h5 className=' w-1/5 '>{elem.taskCounts.active}</h5>
            <h5 className=' w-1/5 '>{elem.taskCounts.completed}</h5>
            <h5 className=' w-1/5 '>{elem.taskCounts.failed}</h5>
        </div>
        })}

        </div>

        {/* <div className='bg-red-400 mb-2 flex justify-between px-4 py-2 rounded'>
            <h2>Lokesh</h2>
            <h2>Make a ui design</h2>
            <h5>Status</h5>
        </div> */}
        {/* <div className='bg-yellow-400 mb-2 flex justify-between px-4 py-2 rounded'>
            <h2>Lokesh</h2>
            <h2>Make a ui design</h2>
            <h5>Status</h5>
        </div>
        <div className='bg-green-400 mb-2 flex justify-between px-4 py-2 rounded'>
            <h2>Lokesh</h2>
            <h2>Make a ui design</h2>
            <h5>Status</h5>
        </div>
        <div className='bg-blue-400 mb-2 flex justify-between px-4 py-2 rounded'>
            <h2>Lokesh</h2>
            <h2>Make a ui design</h2>
            <h5>Status</h5>
        </div>
        <div className='bg-purple-400 mb-2 flex justify-between px-4 py-2 rounded'>
            <h2>Lokesh</h2>
            <h2>Make a ui design</h2>
            <h5>Status</h5> 
        </div> */}
    </div>
  )
}

export default AllTask
