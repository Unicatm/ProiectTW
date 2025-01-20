import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

export default function ModalaEchipa({ onEchipaCreata }) {
  const [open, setOpen] = React.useState(false);
  const [numeEchipa, setNumeEchipa] = React.useState(""); // State pentru numele echipei
  const [membriEchipa, setMembriEchipa] = React.useState([]); // State pentru membrii echipei
  const [utilizatoriFaraEchipa, setUtilizatoriFaraEchipa] = React.useState([]);

  // Preluare utilizatori fără echipă
  useEffect(() => {
    fetch("http://localhost:8080/users/faraEchipa")
      .then((response) => response.json())
      .then((data) => {
        console.log("AAAIIICIII!!!!");
        console.log(data);
        setUtilizatoriFaraEchipa(data);
      })
      .catch((error) =>
        console.error("Eroare la preluarea utilizatorilor fără echipă:", error)
      );
  }, []);

  // Trimitere date către backend
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      numeEchipa,
      membriEchipa: membriEchipa.map((user) => user.email), // Extragem email-urile utilizatorilor selectați
    };

    try {
      const response = await fetch(
        "http://localhost:8080/echipe/creareEchipa",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Eroare la crearea echipei");
      }

      const result = await response.json();
      console.log("Echipa creată:", result);

      if (onEchipaCreata) {
        onEchipaCreata(result.id);
      }

      setOpen(false);
      // Resetează state-urile
      setNumeEchipa("");
      setMembriEchipa([]);
    } catch (error) {
      console.error("Eroare la trimiterea datelor:", error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        size="large"
        onClick={handleClickOpen}
      >
        Creează o echipă
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: { width: "50vw", padding: "1rem 0", minWidth: "500px" },
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle align="center" fontWeight={600}>
          Crează echipa
        </DialogTitle>
        <DialogContent>
          {/* Numele echipei */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="numeEchipa"
            name="numeEchipa"
            label="Nume echipă"
            type="text"
            fullWidth
            variant="outlined"
            value={numeEchipa}
            onChange={(e) => setNumeEchipa(e.target.value)}
          />

          {/* Membrii echipei */}
          <Autocomplete
            multiple
            id="autocomplete-membri-echipa"
            options={utilizatoriFaraEchipa || []} // Dacă este null/undefined, folosim un array gol
            getOptionLabel={(option) => option.nume || ""} // Asigurăm că opțiunea are un label valid
            value={membriEchipa}
            onChange={(event, value) => setMembriEchipa(value)} // Actualizăm membri selectați
            renderInput={(params) => (
              <TextField
                {...params}
                label="Membri"
                placeholder="Selectează membri"
              />
            )}
            sx={{ width: "100%", mt: "2rem" }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ width: "100%", mx: "1rem" }}
            variant="contained"
            type="submit"
          >
            Crează Modala
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
