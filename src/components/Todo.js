import { ListItem, Checkbox } from "@material-ui/core";

export default function Todo({ text }) {
  return (
    <ListItem>
      <Checkbox />
      {text}
    </ListItem>
  );
}
