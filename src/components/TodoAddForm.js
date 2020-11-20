import {
  Backdrop,
  Button,
  Card,
  FormControl,
  Input,
  Typography,
} from "@material-ui/core";

export default function TodoAddForm() {
  return (
    <div>
      <Backdrop style={{ zIndex: 5 }} open={true}>
        <Card style={{ padding: 20 }}>
          <Typography variant="h5">Add A Todo Item</Typography>
          <FormControl>
            <Input />
            <Button style={{ marginTop: 15 }}>Add</Button>
          </FormControl>
        </Card>
      </Backdrop>
    </div>
  );
}
