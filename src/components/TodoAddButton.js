import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core/';

export const TodoAddButton = ({ setOpen }) => (
  <Button
    onClick={() => setOpen(true)}
    style={{ marginTop: 20 }}
    variant="contained"
  >
    <AddIcon /> Add Todo Item
  </Button>
);
