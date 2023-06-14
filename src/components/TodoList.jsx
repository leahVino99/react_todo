import TodoItem from "./TodoItem"

function TodoList({missions, done}) {
  const style = {
    ul: {
      listStyle: 'none',
      padding: '0px'
    },

    TodoList: {
      fontSize: '2rem',
      color: 'rgb(0, 137, 137)'
    }
  }


  const todoItemArr = missions.map((el,idx) => 
    <TodoItem todo={el} key={el.id} num={idx+1} done={done}/>)


  return (
    <div style={style.TodoList}>
        <ul style={style.ul}>
        { todoItemArr.length ? todoItemArr :
            <p style={style.noMore}>No more missions. Well done!</p> }
        </ul>
    </div>
  )
}

export default TodoList