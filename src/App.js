import React  from 'react'
import Header from "./components/Header"
import Tasks from ".//components/Tasks"
import AddTask from ".//components/AddTask"
import { useState, useEffect } from "react"

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])


  //API to call our JSON data
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }

    getTasks()
  }, [])

//Fetch tasks from API
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()

  return data
}

//Fetch task
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()

  return data
}

//add new task
const addTask = async (task) => {
  const res = await fetch(`http://localhost:5000/tasks`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const data = await res.json()

  setTasks([...tasks, data])


  /* await fetch(`http:localhost:5000/tasks/${task}`, {
    method: 'ADD'
  })
  const id = Math.floor(Math.random() * 10000) + 1

  console.log(id);
  const newTask = { id, ...task }
  setTasks([...tasks, newTask]); */
}


// Delete task from backend JSON too
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`,{
  method: 'DELETE'
  })

  setTasks(tasks.filter(task => task.id !== id));
}

//Toggle reminder and adding it to the Database
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })

  const data = await res.json()

  setTasks(tasks.map(task => (task.id === id ? {...task, reminder: data.reminder} : task)))
}


//{} and && are an if statement
  return (
    <div className='container'>
      <Header 
      onAdd={() => setShowAddTask (!showAddTask)} 
      showAdd={showAddTask} 
    />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}


export default App;
