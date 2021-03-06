import { Container } from '@material-ui/core';
import { useState } from 'react';
import { TodoAddButton, TodoAddForm, Todos } from '../../components';
// tried to import uuid but error strange error pursues
// import uuid from 'uuid';

// Get rid off all direct DOM manipulation and fully use React
export const TodosPage = () => {
  const [open, setOpen] = useState(false);

  const [todoTitle, setTodoTitle] = useState('');

  const [todos, setTodos] = useState([
    { id: 'todo1', text: 'Go get foods', checked: false },
    { id: 'todo2', text: 'Go get monies', checked: false },
  ]);

  const addItemHandler = (e) => {
    e.preventDefault();
    if (todoTitle.length > 0) {
      const newTodo = {
        id: Math.floor(Math.random() * 1000000000) + '',
        text: todoTitle,
      };
      let newTodos = [...todos];
      newTodos[todos.length] = newTodo;
      setTodos(newTodos);
      setTodoTitle('');
      setOpen(false);
    } else {
      alert('You cannot add an empty item');
    }
  };

  const deleteHandler = (id) => {
    const filterTodos = todos.filter((todo) => todo.id !== id);

    setTimeout(() => {
      setTodos(filterTodos);
    }, 50);
  };

  const checkboxHandler = (e) => {
    let newTodos = todos.map((todo) => {
      if (todo.id === e.target.id) {
        todo.checked = !todo.checked;
        return todo;
      }
      return todo;
    });

    // immutability

    let organizedTodos = newTodos.filter((todo) => todo.id !== e.target.id);

    newTodos.forEach((todo) => {
      if (todo.id === e.target.id) {
        organizedTodos.push(todo);
      }
    });

    setTodos(organizedTodos);
  };

  /* 
    When checkbox is checked
    --it activates a dashthrough styling
    --setFinished at array location to true


    When checkbox is unchecked
    --setFinished at array loc to false
  */
  return (
    <div>
      <Container style={{ width: 400 }}>
        <h1>Todo Application</h1>
        <Todos
          todos={todos}
          deleteHandler={deleteHandler}
          checkboxHandler={checkboxHandler}
        />
        <TodoAddButton setOpen={setOpen} />
        <TodoAddForm
          addItemHandler={addItemHandler}
          setOpen={setOpen}
          open={open}
          setTodoTitle={setTodoTitle}
          todoTitle={todoTitle}
        />
      </Container>
    </div>
  );
};
