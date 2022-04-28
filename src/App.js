// //import logo from './logo.svg';
import Header from './components/Header';
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask';

import './index.css';

 const App =()=> {
    const [tasks, setTasks] = useState(
        [
            {
                id : 1,
                text : 'Doctors Appointment',
                day : 'Monday 5th Feb 2020',
                reminder :true
            },
            {
                id : 2,
                text : 'Lecturers Appointment',
                day : 'Wednesday 7th Feb 2020',
                reminder :true
            },
            {
                id : 3,
                text : 'Learning React',
                day : 'Friday 9th Feb 2020',
                reminder :false
            }
        ]

    )

//Delete funtion
const deleteTask = (id) => {
    setTasks(
    tasks.filter((task) => task.id !== id))
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
     <Header/>
     <AddTask onAdd={addTask}/>
    {tasks.length>0 ? <Tasks tasks = {tasks} 
     onDelete={deleteTask} onToggle = {toggleReminder}/>:'No tasks to show'}
    
   </div>
  );
 }

export default App;
