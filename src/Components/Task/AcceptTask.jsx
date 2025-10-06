import React from 'react'

const AcceptTask = ({data}) => {
  // console.log(data.taskTitle)
  return (
    <div className='flex-shrink-0 h-full w-[330px] bg-yellow-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='flex justify-between items-center mt-10'>
                <button className='px-2 py-1  bg-emerald-500 rounded text-sm '>Mark as Completed</button>
                <button className='px-2 py-1  bg-red-500 rounded text-sm '>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask
