import { useState } from "react";

import { List, Card } from "@material-ui/core";
import Todo from "./Todo";

export default function Todos() {
  const [finished, setFinished] = useState([]);

  const todos = [
    { id: 1, text: "Go get foods" },
    { id: 2, text: "Go get monies" },
  ];

  const checkboxHandler = (e) => {
    todos.forEach((todo, index) => {
      if (e.target.id == index + 1 && e.target.checked) {
        let newFinished = [...finished];
        newFinished[index] = true;
        setFinished(newFinished);
      } else if (e.target.id == index + 1 && !e.target.checked) {
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
      <h2>Your Todo List</h2>
      <Card style={{ width: "400px", margin: "auto" }}>
        <List>
          {todos.map((todo, index) => {
            return (
              <Todo
                id={todo.id}
                checkboxHandler={checkboxHandler}
                finished={finished[index]}
                text={todo.text}
              />
            );
          })}
        </List>
      </Card>
    </div>
  );
}
