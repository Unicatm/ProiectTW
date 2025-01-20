import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NavMenu = ({ idEchipa }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.username;
  const date = location.state?.date;
  const authKey = localStorage.getItem("authTokenS");

  useEffect(() => {
    if (!authKey) {
      navigate("/Login");
    }
  });

  const handleLogOut = () => {
    localStorage.removeItem("authTokenS");
    navigate("/Login");
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <Typography variant="h6" component="div">
              Nume: {userName}
            </Typography>
            <Button color="inherit">Acasa</Button>
            <Button
              // onClick={handleEvalueaza}
              disabled={idEchipa === null}
              color="inherit"
            >
              Evalueaza
            </Button>
          </Box>
          <Button color="contained" onClick={handleLogOut}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavMenu;
