import {useState,useEffect} from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = ({onAdd}) => {
    const [showAddTask,setshowAddTask] = useState(true)
  // useState for putting the array into Task together
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()

      console.log(data)
    }
    fetchTasks()
  },[])

  // Add Task
  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    // console.log(id);
    const newTask = { id, ...task }
    setTasks([...tasks ,newTask])
  }
  
  //deleteing Tasks 1 by 1
  const deleteTask = (id) => {
    // console.log('delete',id);
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  // Progress to toggle the Reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      //not Filter , require Map
      tasks.map((task) =>
    task.id ===id ? {...task, reminder:!task.reminder} : task
    )
    )
  }
  
  return (
    <div className="container ">
      <Header onAdd={() => setshowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask}
          onToggle={toggleReminder}  /> : 'No Tasks Found'}
      
    </div>
    
  )
}

export default App;
