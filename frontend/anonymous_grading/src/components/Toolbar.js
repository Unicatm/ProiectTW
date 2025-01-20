import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ToolbarApp = ({name, handleLogOut}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar id = "toolbar" >
              
              
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Pagina Profesor : {name}
              </Typography>
              <Button  id="logOut" color="inherit" onClick={handleLogOut}>Log Out</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default ToolbarApp;