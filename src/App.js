import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import Header from './components/Header'
import VisibleTodoList from './containers/VisibleTodoList'
import './App.css';

const App = () => (
  <div className="container">
    <Header />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
