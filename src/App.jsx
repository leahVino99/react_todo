import {useEffect, useState} from 'react';
import TodoList from "./components/TodoList";
import Context from './context';
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, mission:"Call grandmother", completed:false},
    { id: 5, mission:"Working on memory game", completed:false},
    { id: 2, mission:"Learning Choomash", completed:false},
    { id: 3, mission:"Praying", completed:false}
  ]);


  useEffect(()=>{

     // console.log(todos)
  },[])
    // id - this is id of the checked item
    const done = (id) => {

      console.log('Checkbox checked or unchecked')
  
      const newTodos = todos.map(el => {

   
        
      //OR
      //use of "SPREAD" operator
      //return el.id !==id? el 
       //         : {...el, completed: !el.completed}
  
        return el.id !== id ? el 
                : {id: el.id, mission: el.mission, completed: !el.completed}
  
      })
  
      setTodos(newTodos)
    }
    
    const removeTodo = (id) => {

      const newTodos = todos.filter((el, idx) => el.id !== id)
  
      setTodos(newTodos)
  
    }
  
    let comment = "I am using context";
  
    const addMission = (mission) => {
      
        //concat creats new array
        //Date.now() gives us seconds that passed from the start 
        //of the UNIX era - 1978.01.01 - and this number is only
        //getting - it is always unique
      setTodos(todos.concat({mission, 
                                    id: Date.now(),
                                    completed:false}));
  
  }
  return (
    <Context.Provider value={{
      removeTodo:removeTodo,
      comment: comment
    }}>
    <div className="App">
        
      <h1>TODO</h1>
      <AddTodo addMission={addMission}/>
      <TodoList missions={todos} done={done} />
      
  </div>
  </Context.Provider>
  );
}

export default App;
