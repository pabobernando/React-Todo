import React,{useState} from 'react';


const data = [
  {
    message:'cari makan',
    id:1
  },
  {
    message:'cari minum',
    id:2
  },
  {
    message:'cari lainnya',
    id:3
  }
];

const Header = () => {
  return <h1>Todo App</h1>
};

//                 *props
const InfoBar = ({taskNumber}) => {
  console.log({taskNumber})
  return <div>data {taskNumber} masuk</div>
};

const TaskAdder = ({setTasks, tasks}) => {
  const [currentValue,setCurrentValue] = useState('');


  const handleAddTask = () => {
    const newTask = {
      id:tasks.lenght,
      message: currentValue
    }
    setTasks([...tasks, newTask])
    setCurrentValue('');
  }

  return <div>
    <input type="text" value={currentValue} onChange={event => setCurrentValue(event.target.value)}/>
    <button disabled={currentValue === ''} onClick={() => handleAddTask()}>Tambah</button>
  </div>
};

const Task = ({ message, id, setTasks, tasks}) => {
  const handleDelete = () => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }
  return  (
    <div>
      <div>{message}</div>
      <button onClick={() => handleDelete()}>Delete</button>
    </div>
  )
}

const TaskList = ({tasks, setTasks}) => {
  return tasks.map(task => {
    return <Task message={task.message} id={task.id} setTasks={setTasks} tasks={tasks} />
  })
} 

const TaskApp = () => {
  const [tasks,setTasks] = useState(data);
  return <>
    <Header />
    <InfoBar taskNumber={tasks.length} />
    <TaskAdder setTasks={setTasks} tasks={tasks} />
    <TaskList tasks={tasks} setTasks={setTasks} />
  </>
};

const App = () => {
  return <TaskApp/>
}

export default App;