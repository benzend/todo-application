import { ListItem, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Todo({ text }) {
  return (
    <ListItem>
      <Checkbox />
      {text}
      <DeleteIcon />
    </ListItem>
  );
}
