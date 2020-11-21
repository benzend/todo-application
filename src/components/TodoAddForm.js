import { Backdrop, Button, Card, Input, InputLabel } from "@material-ui/core";
import { useState } from "react";

export default function TodoAddForm(props) {
  const [text, setText] = useState("");
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
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              id="myInput"
            />
            <p>{text}</p>
            <Button type="submit">Add</Button>
          </form>
        </Card>
      </Backdrop>
    </div>
  );
}
