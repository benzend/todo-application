import { useState } from "react";

import { List, Card } from "@material-ui/core";
import Todo from "./Todo";

export default function Todos() {
  const [finished, setFinished] = useState([]);

  const checkboxHandler = (e) => {
    if (e.target.id == 1) {
      console.log("this is the first item");
    }
    if (e.target.id == 2) {
      console.log("this is the second");
    }
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
          <Todo
            id="1"
            checkboxHandler={checkboxHandler}
            finished={finished[0]}
            text="Go get food"
          />
          <Todo
            id="2"
            checkboxHandler={checkboxHandler}
            finished={finished[1]}
            text="Go get monies"
          />
        </List>
      </Card>
    </div>
  );
}
