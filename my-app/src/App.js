import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import './App.css';

import Header from './components/header';
import ToDoList from './components/toDoList';
import ToDoBoard from './components/toDoBoard';
import ToDoForm from './components/toDoForm';
import Footer from './components/footer';


function App() {
  return (
    <>
    <Header />
    <Main>
    <ToDoList />
    <ToDoForm />
    <Switch>
      <Route path='/board'>
      <ToDoBoard />
      </Route>
    </Switch>
    </Main>
    <Footer />
    </>
  );
}

export default App;
