import { ListItem, Checkbox, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Todo({ text }) {
  return (
    <ListItem>
      <Checkbox />
      <p>{text}</p>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}
