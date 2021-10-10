import { TextField, Button } from "@mui/material";

import Logo from '../../ui-components/logo/LogoView';
// eslint-disable-next-line no-unused-vars
import './Nav.module.scss';
import classes from './Nav.module.scss';


function NavView() {
  return (
    <nav>
      <Logo />
      {/* <TextField id='outlined-basic' label='Outlined' variant='outlined' /> */}
      <div className={classes.buttons}>
        <Button variant='contained'>Sign Up</Button>
        <Button variant='outlined' color='secondary'>Login</Button>
      </div>
    </nav>
  );
}

export default NavView;