import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";

export default function ModalaProiect({
  open,
  onClose,
  idEchipa,
  onLivrabilAdaugat,
  onProiectAdaugat,
  proiectExistente,
}) {
  const [titlu, setTitlu] = React.useState("");
  const [descriere, setDescriere] = React.useState("");
  const [link, setLink] = React.useState("");
  const [openM, setOpen] = React.useState(false);

  console.log(proiectExistente);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      titlu,
      descriere,
      idEchipa,
    };

    console.log(data);

    try {
      const response = await fetch("http://localhost:8080/proiecte/proiecte", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Eroare: ${errorText}`);
      }

      const result = await response.json();
      console.log("Proiect adăugat:", result);

      if (onLivrabilAdaugat) {
        onLivrabilAdaugat(result);
      }

      if (onProiectAdaugat) {
        onProiectAdaugat(result);
      }

      handleClose();
    } catch (error) {
      console.error("Eroare la trimiterea datelor:", error.message);
    }
  };

  const handleClose = () => {
    setTitlu("");
    setDescriere("");
    setLink("");
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      {!proiectExistente && (
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          size="large"
          onClick={handleClickOpen}
        >
          Creează un Proiect
        </Button>
      )}
      <Dialog
        open={openM}
        onClose={handleClose}
        PaperProps={{
          style: { width: "50vw", padding: "1rem 0", minWidth: "500px" },
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle align="center" fontWeight={600}>
          Creaza un Proiect
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="titlu"
            name="titlu"
            label="Titlu"
            type="text"
            fullWidth
            variant="outlined"
            value={titlu}
            onChange={(e) => setTitlu(e.target.value)}
          />
          <TextField
            required
            margin="dense"
            id="descriere"
            name="descriere"
            label="Descriere"
            type="text"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            value={descriere}
            onChange={(e) => setDescriere(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ width: "100%", mx: "1rem" }}
            variant="contained"
            type="submit"
          >
            Salvează
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
