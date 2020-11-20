import { List, Card } from "@material-ui/core";
import Todo from "./Todo";

export default function Todos() {
  return (
    <div>
      <h2>Your Todo List</h2>
      <Card style={{ width: "400px", margin: "auto" }}>
        <List>
          <Todo text="Go get food" />
          <Todo text="Go get monies" />
        </List>
      </Card>
    </div>
  );
}
