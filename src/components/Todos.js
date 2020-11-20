import { useState } from "react";

import { List, Card } from "@material-ui/core";
import Todo from "./Todo";

export default function Todos() {
  const [finished, setFinished] = useState([]);
  const [checked, setChecked] = useState([false, true]);
  return (
    <div>
      <h2>Your Todo List</h2>
      <Card style={{ width: "400px", margin: "auto" }}>
        <List>
          <Todo
            checked={checked[0]}
            finished={finished[0]}
            setFinished={setFinished}
            text="Go get food"
          />
          <Todo
            checked={checked[1]}
            finished={finished[1]}
            setFinished={setFinished}
            text="Go get monies"
          />
        </List>
      </Card>
    </div>
  );
}
