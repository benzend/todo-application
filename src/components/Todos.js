import { List, Card } from '@material-ui/core';

import { Todo } from '.';

export const Todos = (props) => {
  return (
    <div>
      <h2>Your Todo List</h2>
      {props.todos.length === 0 ? null : (
        <Card style={{ margin: 'auto' }}>
          <List>
            {props.todos.map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  checkboxHandler={props.checkboxHandler}
                  deleteHandler={() => props.deleteHandler(todo.id)}
                  checked={todo.checked}
                  text={todo.text}
                />
              );
            })}
          </List>
        </Card>
      )}
    </div>
  );
};
