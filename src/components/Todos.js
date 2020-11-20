import { List } from "@material-ui/core";
import Todo from "./Todo";

export default function Todos() {
  return (
    <div>
      <h2>Your Todo List</h2>
      <List>
        <Todo text="Go get food" />
        <Todo text="Go get monies" />
      </List>
    </div>
  );
}
