import Header from "./components/Header"
import Tasks from ".//components/Tasks"
import AddTask from ".//components/AddTask"
import { useState } from "react"

const App = () => {
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Task 1', day: 'Day 1 description', reminder: true,},
    {id: 2, text: 'Task 2', day: 'Day 2 description', reminder: false,},
    {id: 3, text: 'Task 3', day: 'Day 3 description', reminder: true,},]
);

//add new task
const addTask = (task) => {
  console.log(task);
  setTasks([...tasks, task]);
}


// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
}

//Toggle reminder
const toggleReminder = (id) => {
  console.log(id)
  setTasks(tasks.map(task => (task.id === id ? {...task, reminder: !task.reminder} : task)))
}



  return (
    <div className='container'>
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <p>No tasks</p>}
    </div>
  );
}


export default App;
