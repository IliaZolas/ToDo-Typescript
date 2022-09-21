import React from 'react';
import './App.css';
import TaskInput from './components/taskInput';
import TaskList from './components/taskList';


function App() {
  return (
    <div className="App" style={{ width: "100%"}}>
        <h1>
          Todo App
        </h1>
        <div style={{  width: "500px" , margin: "auto" , alignContent: "center"}}>
          <TaskInput />
          <TaskList />
        </div>  
    </div>
  );
}

export default App;
