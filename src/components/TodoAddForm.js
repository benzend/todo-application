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
          e.target.className == "MuiBackdrop-root" ? props.setOpen(false) : null
        }
        style={{ zIndex: 5 }}
        open={props.open}
      >
        <Card id="card" style={{ padding: 20, zIndex: 6 }}>
          <Typography variant="h5">Add A Todo Item</Typography>
          <FormControl>
            <Input />
            <Button variant="outlined" style={{ marginTop: 15 }}>
              Add
            </Button>
          </FormControl>
        </Card>
      </Backdrop>
    </div>
  );
}
