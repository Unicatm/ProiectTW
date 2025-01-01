import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from './Button';
const Toolbar = ({name}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              
              
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Pagina Profesor : {name}
              </Typography>
              <Button label="Log out" id="logOutBtn" color="inherit"></Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Toolbar;