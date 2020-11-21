import { Backdrop, Button, Card, Input, InputLabel } from "@material-ui/core";

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
          <form onSubmit={props.addItemHandler}>
            <InputLabel htmlFor="myInput">Add Todo Item</InputLabel>
            <Input />
            <Button type="submit">Add</Button>
          </form>
        </Card>
      </Backdrop>
    </div>
  );
}
