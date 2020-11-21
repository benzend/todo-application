import {
  Backdrop,
  Button,
  Card,
  FormControl,
  Input,
  Typography,
} from "@material-ui/core";

export default function TodoAddForm(props) {
  return (
    <div>
      <Backdrop
        onClick={(e) =>
          e.target.className == "MuiBackdrop-root" ? props.setOpen(false) : ""
        }
        style={{ zIndex: 5 }}
        open={props.open}
      >
        <Card id="card" style={{ padding: 20 }}>
          <Typography variant="h5">Add A Todo Item</Typography>
          <FormControl>
            <Input />
            <Button
              onClick={props.addItemHandler}
              variant="outlined"
              style={{ marginTop: 15 }}
            >
              Add
            </Button>
          </FormControl>
        </Card>
      </Backdrop>
    </div>
  );
}
