import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const inputVal = (event) => {
    setText(event.target.value);
  }

  const addTask = () => {
    if (text === "") return;
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      name: text,
      done: false
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const remTask = () => {
    tasks.pop();
    let updatedTasks = [...tasks];
    setTasks(updatedTasks);
  }

  const del = (id, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const change = (task) => {
    task.done = !task.done;
    task.done ? setTasks([...tasks.filter((t) => t.id !== task.id), task]) : setTasks([task, ...tasks.filter((t) => t.id !== task.id)]);
  }

  const enter = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input type="text" onChange={inputVal} onKeyDown={enter} value={text} />
        <button onClick={addTask}>Add Task</button>
        <button onClick={remTask}>Remove Task</button>
        <button onClick={() => setTasks([])}>Clear Tasks</button>
      </div>
      <div className='taskList'>
        {
          tasks.map((task, key) => {
            return (
              <div key={key} className='task' style={{ backgroundColor: task.done ? "lightgreen" : "lightgrey" }}>
                <div onClick={() => change(task)}>
                  <p>{task.name}</p>
                </div>
                <button onClick={() => del(task.id)}>X</button>
              </div>
            )
          })
        }
      </div>
      <div style={{ margin: '20px', bottom: '0', position: 'fixed' }}>Made for practice 👽 by code***in</div>
    </div>
  );
}

export default App;
