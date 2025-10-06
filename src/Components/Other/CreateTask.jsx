import React, { useContext, useState } from 'react'
import CompleteTask from '../Task/CompleteTask';
import { AuthContext } from '../../Context/AuthProvider';

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)  

const [taskTitle, setTaskTitle] = useState('');
const [taskDate, setTaskDate] = useState('');
const [taskDescription, setTaskDescription] = useState('');
const [category, setCategory] = useState('');
const [assignTo, setAssignTo] = useState('');

const [newTask, setNewTask] = useState({});

const submitHandler=(e)=>{
  e.preventDefault()
  // console.log(taskTitle, taskDescription, taskDate, category, assignTo)
  setNewTask({taskTitle, taskDescription, taskDate, category, assignTo, active:false, newTask:true, failed:false, Completed:false})
  // console.log(task)

  // const data = JSON.parse(localStorage.getItem('employees'))
  // console.log(data)
  const data = userData
  // console.log(userData);
  

  data.forEach(function(elem){
    if(assignTo==elem.firstName){
      // console.log("thats the user we are looking for")
      elem.tasks.push(newTask)
      // console.log(elem)
      elem.taskCounts.newTask=elem.taskCounts.newTask+1
    }
  })
  setUserData(data)
  // localStorage.setItem('employees', JSON.stringify(data))
  console.log(data);
  

  setTaskTitle('')
  setTaskDescription('')
  setTaskDate('')
  setCategory('')
  setAssignTo('')

}

  return (
    <div>
      <div className='p-5  bg-[#1c1c1c] mt-7 rounded'>
        <form  id='taskCreate' onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input
                value={taskTitle}
                onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }}
                className='text-sm px-2 py-2  bg-transparent outline-none border-[1px] border-gray-300 rounded w-4/5 mb-4' type="text" placeholder='make a ui design' />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input
                value={taskDate}
                onChange={(e)=>{
                  setTaskDate(e.target.value)
                }}
                className='text-sm px-2 py-2  bg-transparent outline-none border-[1px] border-gray-300 rounded w-4/5 mb-4' type="date"/>
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                <input
                value={assignTo}
                onChange={(e)=>{
                  setAssignTo(e.target.value)
                }}
                className='text-sm px-2 py-2  bg-transparent outline-none border-[1px] border-gray-300 rounded w-4/5 mb-4' type="text" placeholder='Employee name' />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input
                value={category}
                onChange={(e)=>{
                  setCategory(e.target.value)
                }}
                className='text-sm px-2 py-2  bg-transparent outline-none border-[1px] border-gray-300 rounded w-4/5 mb-4' type="text" placeholder='design, dev, etc..' />
            </div>
            </div>
            <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea
                value={taskDescription}
                onChange={(e)=>{
                  setTaskDescription(e.target.value)
                }}
                className='w-full h-52 text-sm border-[1px] border-gray-300 rounded outline-none py-2 px-4 bg-transparent' name="" id=""></textarea>
                <button className='text-sm py-3 px-10 mt-4 bg-emerald-500 hover:bg-emerald-600 rounded w-full'>Create Task</button>
            </div>
            
        </form>
      </div>
    </div>
  )
}

export default CreateTask
