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

export default function ModalaEchipa() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

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
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle align="center" fontWeight={600}>
          Crează echipa
        </DialogTitle>
        <DialogContent>
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
          />

          <Autocomplete
            multiple
            id="autocomplete-membri-echipa"
            options={names}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField {...params} label="Membri" placeholder="Membri" />
            )}
            sx={{ width: "100%", mt: "2rem" }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ width: "100%", mx: "1rem" }}
            variant="contained"
            onClick={handleClose}
          >
            Crează
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
