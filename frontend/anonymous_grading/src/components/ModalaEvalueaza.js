import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

export default function ModalaEvalueaza({ open, onClose, idUser }) {
  const [proiect, setProiect] = useState(null);
  const [livrabile, setLivrabile] = useState([]);
  const [noteLivrabile, setNoteLivrabile] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open && idUser) {
      setLoading(true);
      fetch("http://localhost:8080/evaluare/evalueaza", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idUser }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Răspuns API:", data);
          setProiect(data.proiect);
          setLivrabile(data.livrabile);
          setLoading(false);

          // Construiește un obiect cu notele utilizatorului pentru fiecare livrabil
          const notePerLivrabil = {};
          data.livrabile.forEach((livrabil) => {
            const noteExistente = livrabil.note;
            const notaUser = noteExistente.find(
              (note) => note.idUser === idUser
            );
            if (notaUser) {
              notePerLivrabil[livrabil.id] = notaUser.nota;
            }
          });
          setNoteLivrabile(notePerLivrabil);
        })
        .catch((err) => {
          console.error("Eroare la preluarea proiectului:", err);
          setLoading(false);
        });
    }
  }, [open, idUser]);

  const handleNotaChange = (idLivrabil, nota) => {
    setNoteLivrabile((prev) => ({
      ...prev,
      [idLivrabil]: nota,
    }));
  };

  const handleSalveazaNota = (idLivrabil) => {
    const nota = noteLivrabile[idLivrabil];
    fetch(`http://localhost:8080/note/note`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idUser, idLivrabil, nota }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Nota salvată:", data);

        // Actualizăm nota în state pentru ca inputul și butonul să se actualizeze
        setNoteLivrabile((prev) => ({
          ...prev,
          [idLivrabil]: nota,
        }));

        // După salvarea notei, actualizăm și livrabilele, pentru a face inputul readOnly
        setLivrabile((prev) =>
          prev.map((livrabil) =>
            livrabil.id === idLivrabil ? { ...livrabil, nota } : livrabil
          )
        );
      })
      .catch((err) => console.error("Eroare la salvarea notei:", err));
  };

  console.log(proiect, livrabile);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: { width: "60vw", padding: "1rem", minWidth: "600px" },
      }}
    >
      <DialogTitle align="center" fontWeight={600}>
        Evaluează un proiect
      </DialogTitle>
      <DialogContent>
        {loading ? (
          <Typography align="center">Se încarcă...</Typography>
        ) : proiect ? (
          <Box>
            <Typography variant="h6">Titlu Proiect: {proiect.titlu}</Typography>
            <Typography variant="subtitle1">
              Echipă: {proiect.numeEchipa}
            </Typography>
            <Typography variant="body1">
              Descriere: {proiect.descriere}
            </Typography>
            <Typography variant="h6">Livrabile:</Typography>
            {livrabile.map((livrabil) => {
              console.log("Livrabil:", livrabil);
              const isNotaData = livrabil.note.some(
                (note) => note.idUser === idUser
              );
              return (
                <Box key={livrabil.id} sx={{ mb: 2 }}>
                  <Typography>
                    <strong>{livrabil.titlu}</strong>: {livrabil.descriere}
                  </Typography>
                  <TextField
                    // Dacă nota este deja adăugată, input-ul devine read-only
                    InputProps={{
                      readOnly: isNotaData,
                    }}
                    label="Nota"
                    type="number"
                    fullWidth
                    value={noteLivrabile[livrabil.id] || ""}
                    onChange={(e) =>
                      handleNotaChange(
                        livrabil.id,
                        parseInt(e.target.value, 10)
                      )
                    }
                  />
                  <Button
                    variant="contained"
                    sx={{ mt: 1 }}
                    onClick={() => {
                      handleSalveazaNota(livrabil.id);
                    }}
                    disabled={isNotaData || !noteLivrabile[livrabil.id]}
                  >
                    Trimite Nota
                  </Button>
                </Box>
              );
            })}
          </Box>
        ) : (
          <Typography align="center">Nu există proiect de evaluat.</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Închide
        </Button>
      </DialogActions>
    </Dialog>
  );
}
