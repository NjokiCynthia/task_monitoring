// //import logo from './logo.svg';
import Header from './components/Header';
import Tasks from './components/Tasks'
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask';

import './index.css';

 const App =()=> {
     const [showAddTask, setShowAddTask]= useState(false)
    const [tasks, setTasks] = useState([] )

//Delete funtion
const deleteTask = (id) => {
    setTasks(
    tasks.filter((task) => task.id !== id))
}

useEffect(()=>{

    const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
    }
getTasks()
}, [] )
//Fetch tasks
const fetchTasks= async ()=>{
const res = await fetch('http://localhost:5000/tasks') 
const data = await res.json()

return data
}

//Add task
const addTask = (task) => {
 const id = Math.floor(Math.random() *1000)+1  
   const newTask ={id, ...task}
   setTasks([...tasks, newTask])
}

//Reminder
const toggleReminder = (id) => {
    setTasks(
        tasks.map((task) =>
        task.id === id? {...task, reminder: !task.reminder
    }: task ))
}

 return (
     
 <div className="container">
     <Header onAdd = {()=>setShowAddTask(!showAddTask)}/>
     {showAddTask && <AddTask onAdd={addTask}
     showAdd={showAddTask}/>}
    {tasks.length>0 ? <Tasks tasks = {tasks} 
     onDelete={deleteTask} onToggle = {toggleReminder}/>:'No tasks to show'}
    
   </div>
  );
 }

export default App;
