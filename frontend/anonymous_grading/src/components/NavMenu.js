import * as React from "react";
import ModalaEvalueaza from "./ModalaEvalueaza";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NavMenu = ({ idEchipa, idUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.username;
  const date = location.state?.date;
  const authKey = localStorage.getItem("authTokenS");

  const [open, setOpen] = React.useState(false);
  const [livrabile, setLivrabile] = useState([]); 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!authKey) {
      navigate("/Login");
    }
  }, [authKey, navigate]);

  const handleLogOut = () => {
    localStorage.removeItem("authTokenS");
    navigate("/Login");
  };

  const actualizeazaLivrabile = () => {
    fetchLivrabile();
  };

  const fetchLivrabile = async () => {
    try {
      const response = await fetch("http://localhost:8080/livrabile");
      const data = await response.json();
      setLivrabile(data);
    } catch (error) {
      console.error("Eroare la obținerea livrabilelor:", error);
    }
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
              onClick={handleClickOpen}
              disabled={idEchipa === null}
              color="inherit"
            >
              Evalueaza
            </Button>
            <ModalaEvalueaza
              open={open}
              onClose={handleClose}
              idUser={idUser}
              actualizeazaLivrabile={actualizeazaLivrabile}
            />
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
