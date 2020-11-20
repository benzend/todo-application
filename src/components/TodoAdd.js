import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core/";

export default function TodoAdd() {
  return (
    <Button style={{ marginTop: 20 }} variant="contained">
      <AddIcon /> Add Todo Item
    </Button>
  );
}
