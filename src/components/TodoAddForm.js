import { Backdrop, Button, Card, Input, InputLabel } from '@material-ui/core';

// Controlled component https://reactjs.org/docs/forms.html
// value of the todo text available in the state and then you can
// addTodo(todoText);
// https://material-ui.com/components/text-fields/#textfield
export const TodoAddForm = (props) => {
  return (
    <div>
      <Backdrop
        onClick={(e) =>
          e.target.className === 'MuiBackdrop-root' ? props.setOpen(false) : ''
        }
        style={{ zIndex: 5 }}
        open={props.open}
      >
        <Card id="card" style={{ padding: 20 }}>
          <form onSubmit={props.addItemHandler}>
            <InputLabel htmlFor="myInput">Add Todo Item</InputLabel>
            <Input
              onChange={(e) => props.setTodoTitle(e.target.value)}
              value={props.todoTitle}
            />
            <Button type="submit">Add</Button>
          </form>
        </Card>
      </Backdrop>
    </div>
  );
};
