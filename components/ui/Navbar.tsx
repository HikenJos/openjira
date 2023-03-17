import { useContext } from 'react';
import { MenuOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { UIContext } from '../../context/ui';

function Navbar() {
  const {openSideMenu} = useContext(UIContext);
  return (
    <AppBar position='sticky' elevation={ 0 }>
      <Toolbar>
        <IconButton size='large' edge='start' onClick={openSideMenu}>
          <MenuOutlined />
        </IconButton>
        <Typography variant='h6'>OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;