import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'fontsource-roboto';
import HeaderComponent from './components/header/HeaderComponent';
import UserComponent from './components/user/UserComponent';
import TaskListComponent from './components/task-list/TaskListComponent';
import AddTaskComponent from './components/task/AddTaskComponent';
import UserListComponent from './components/user-list/UserListComponent';


function App() {
  return (
    <div className="App">
      <AddTaskComponent/>
      <UserListComponent/>
      <UserComponent />
      <TaskListComponent />
    </div>
  );
}

export default App;
