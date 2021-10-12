import React, { useState } from 'react';
import { 
  // TextField,
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../../ui-components/logo/LogoView';
// eslint-disable-next-line no-unused-vars
import './Nav.module.scss';
import classes from './Nav.module.scss';


function NavView() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav>
        
              {/* <AppBar className={classes.nav}>
                <Toolbar>
                  <IconButton
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    className={classes.menuButton}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant='h6' className={classes.title}>
                    Title
                  </Typography>
                  <Button color='inherit' onClick={handleOpen}>
                    Signup
                  </Button>
                </Toolbar>
              </AppBar> */}
        <Logo />
        <div className={classes.buttons}>
          <Button variant='contained'>Sign Up</Button>
          <Button variant='contained' color='secondary'>
            Login
          </Button>
        </div>
      </nav>
  );
}

export default NavView;