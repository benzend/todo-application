import { ListItem, Checkbox, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Todo(props) {
  const finishedStyle = {
    textDecoration: "line-through",
    opacity: 0.5,
  };
  return (
    <ListItem style={{ justifyContent: "space-between" }}>
      <div style={props.finished ? finishedStyle : null}>
        <Checkbox checked={props.checked} />
        {props.text}
      </div>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}
