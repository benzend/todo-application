import { ListItem, Checkbox, IconButton, makeStyles } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

// 1. Use Arrow functions and named imports
// 2. Don't nest constant values inside of the components, as they will re-render and we want to avoid that
// 3. Theme file is global for all styles: https://material-ui.com/customization/default-theme/#default-theme

const useStyles = makeStyles((theme) => ({
  listItemHolder: {
    justifyContent: 'space-between',
  },
  finishedTodoHolder: {
    textDecoration: 'line-through',
    opacity: 0.5,
  },
}));

export const Todo = ({ id, checkboxHandler, text, deleteHandler, checked }) => {
  const { listItemHolder, finishedTodoHolder } = useStyles();
  const finishedClassName = checked ? finishedTodoHolder : '';

  return (
    <ListItem className={listItemHolder}>
      <div className={finishedClassName}>
        <Checkbox id={id} onClick={checkboxHandler} />
        {text}
      </div>
      <IconButton onClick={deleteHandler}>
        <Delete />
      </IconButton>
    </ListItem>
  );
};
