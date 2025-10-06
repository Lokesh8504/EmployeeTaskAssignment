import React, { useEffect, useState } from 'react'

const NewTask = ({data}) => {
  // const [Accept, setAccept] = useState('');
  // useEffect(() => {
    
  

  // });


  return (
    <div className='flex-shrink-0 h-full w-[330px] bg-blue-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='mt-10'>
                <button className='w-full bg-emerald-500 rounded px-2 py1'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask
