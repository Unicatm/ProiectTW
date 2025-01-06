import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NavMenu = ({ cod }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <Typography variant="h6" component="div">
              Codul meu: {cod}
            </Typography>
            <Button color="inherit">Acasa</Button>
            <Button disabled color="inherit">
              Evalueaza
            </Button>
          </Box>
          <Button color="contained">Log Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavMenu;
