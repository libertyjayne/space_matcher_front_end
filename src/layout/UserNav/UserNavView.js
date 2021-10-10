import { TextField, Button } from "@mui/material";

function UserNavView() {
  return (
    <nav>
      <logo>Space Matcher</logo>
      <TextField id='outlined-basic' label='Outlined' variant='outlined' />
      <Button variant='contained'>Contained</Button>
    </nav>
  );
}

export default UserNavView;