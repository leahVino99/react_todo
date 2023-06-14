import './TodoItem.css';
import { useContext } from 'react';
import Context from '../context';


function TodoItem({todo, done, num}) {

  // TodoItem here subscribes to follow the changes of removeTodo
  const { removeTodo } = useContext(Context);
  // Here todoItem is a Consumer
  const style = {

    li: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "1rem 2rem",
      padding: "0.5rem",
      border: "1px solid #ccc",
      borderRadius: "2px"
    },

    span: {
      display: "flex",
      alignItems: "center",
    }

  }
    //props is an object
    //We use {} inside 
  return (
      /* The first {} is for JavaScript
       the second {} is because "style" is an object */
       <li style={style.li}> 
       <span style={style.span}
       className={todo.completed? "completed" : ""}>
         <input type="checkbox" onClick={()=>done(todo.id)} />
       {num}.{todo.mission}
       </span>
       <button className='delete' onClick={()=>removeTodo(todo.id)}>&times;</button>
     </li>
  )
}

export default TodoItem