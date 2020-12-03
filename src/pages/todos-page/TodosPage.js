import { Container } from '@material-ui/core';
import { useState } from 'react';

import { TodoAddButton, TodoAddForm, Todos } from '../../components';

// Get rid off all direct DOM manipulation and fully use React
export const TodosPage = () => {
  const [open, setOpen] = useState(false);

  const [todos, setTodos] = useState([
    { id: 'todo1', text: 'Go get foods', checked: false },
    { id: 'todo2', text: 'Go get monies', checked: false },
  ]);

  const addItemHandler = (e) => {
    e.preventDefault();
    if (e.target.children[1].firstChild.value) {
      const newTodo = {
        id: `todo${todos.length + 1}`,
        text: e.target.children[1].firstChild.value,
      };
      let newTodos = [...todos];
      newTodos[todos.length] = newTodo;
      console.log(newTodos);
      setTodos(newTodos);
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

    setTodos(newTodos);
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
        />
      </Container>
    </div>
  );
};
