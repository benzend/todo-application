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
        <Checkbox id={props.id} onClick={props.checkboxHandler} />
        {props.text}
      </div>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}
