import { Container } from "@material-ui/core";
import { useState } from "react";
import TodoAddButton from "./TodoAddButton";
import TodoAddForm from "./TodoAddForm";
import Todos from "./Todos";

export default function TodosPage() {
  const [finished, setFinished] = useState([]);

  const [open, setOpen] = useState(false);

  const [todos, setTodos] = useState([
    { id: "todo1", text: "Go get foods" },
    { id: "todo2", text: "Go get monies" },
  ]);

  // Figure out a way to add item with while setting a
  // new id for each

  const addItemHandler = (e) => {
    console.log(e.target);
  };

  const deleteHandler = (id) => {
    const filterTodos = todos.filter((todo) => todo.id !== id);

    setTimeout(() => {
      setTodos(filterTodos);
    }, 50);
  };

  const checkboxHandler = (e) => {
    todos.forEach((todo, index) => {
      if (e.target.id === todo.id && e.target.checked) {
        let newFinished = [...finished];
        newFinished[index] = true;
        setFinished(newFinished);
      } else if (e.target.id === todo.id && !e.target.checked) {
        let newFinished = [...finished];
        newFinished[index] = false;
        setFinished(newFinished);
      }
    });
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
          finished={finished}
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
}
