import Form from './components/form'
import Header from './components/header'
import List from './components/list';
import React, {useState} from 'react';
function App() {
  //import the useState hook
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <Header/>
      <Form setTodo={setTodos} len={todos.length}/>
      <List todoList={todos} setTodo={setTodos}/>
    </div>
  );
}
export default App;
