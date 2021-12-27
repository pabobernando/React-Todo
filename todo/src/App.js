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
  }

  return <div>
    <input type="text" onChange={event => setCurrentValue(event.target.value)}/>
    <button onClick={() => handleAddTask()}>Tambah</button>
  </div>
};

const Task = ({ message, id}) => {
  return  (
    <div>
      <div>{message}</div>
      <button>Delete</button>
    </div>
  )
}

const TaskList = ({tasks}) => {
  return tasks.map(task => {
    return <Task message={task.message} id={task.id} />
  })
}

const TaskApp = () => {
  const [tasks,setTasks] = useState(data);
  return <>
    <Header />
    <InfoBar taskNumber={tasks.length} />
    <TaskAdder setTasks={setTasks} tasks={tasks} />
    <TaskList tasks={tasks} />
  </>
};

const App = () => {
  return <TaskApp/>
}

export default App;