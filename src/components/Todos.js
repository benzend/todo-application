import { List, Card } from '@material-ui/core';

import { Todo } from '.';

export const Todos = (props) => {
  return (
    <div>
      <h2>Your Todo List</h2>
      <Card style={{ margin: 'auto' }}>
        <List>
          {props.todos.map((todo, index) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                checkboxHandler={props.checkboxHandler}
                deleteHandler={() => props.deleteHandler(todo.id)}
                finished={props.finished[index]}
                text={todo.text}
              />
            );
          })}
        </List>
      </Card>
    </div>
  );
};
