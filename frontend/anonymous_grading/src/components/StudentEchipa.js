import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ListaLivrabileStudent from "./ListaLivrabileStudent";
import { Button } from "@mui/material";
import ModalaLivrabil from "./ModalaLivrabil";
import ModalaProiect from "./ModalaProiect";

export default function StudentEchipa({
  numeEchipa,
  arrCoechipieri,
  arrLivrabile,
  notaFinala,
  idProiect,
  idJuriu,
  idEchipa,
  actualizeazaLivrabile,
}) {
  const [isModalaOpen, setIsModalaOpen] = useState(false);
  const [proiectExistente, setProiectExistente] = useState(false);

  console.log(proiectExistente);

  const handleOpenModala = () => {
    setIsModalaOpen(true);
  };

  const handleCloseModala = () => {
    setIsModalaOpen(false);
  };

  const handleLivrabilAdaugat = (nouLivrabil) => {
    console.log("Livrabil nou adăugat:", nouLivrabil);
    setIsModalaOpen(false);
  };

  const fetchProiect = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/proiecte/echipa/${idEchipa}`
      );
      if (!response.ok) {
        throw new Error("Eroare la obținerea proiectului.");
      }
      const data = await response.json();
      setProiectExistente(data && data.proiect);
    } catch (error) {
      console.error("Eroare la obținerea proiectului:", error.message);
    }
  };

  useEffect(() => {
    fetchProiect();
  }, [idEchipa]);

  const handleProiectAdaugat = (proiectNou) => {
    console.log("Proiect nou adăugat:", proiectNou);
    fetchProiect();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        gap: "5rem",
        height: "100%",
        width: "50%",
        padding: "5rem 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.8rem",
        }}
      >
        <Typography sx={{ fontSize: "1.4rem" }}>
          <span style={{ fontWeight: "bold" }}>Nume echipă:</span> {numeEchipa}
        </Typography>
        <Typography sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
          Membri:
        </Typography>
        <Stack direction="row" spacing={1}>
          {arrCoechipieri.map((coechipier, index) => (
            <Typography
              key={index}
              sx={{
                backgroundColor: "#bde0fe",
                padding: "0.2rem 0.6rem",
                borderRadius: "0.2rem",
                userSelect: "none",
                "&:hover": {
                  backgroundColor: "#a8d7ff",
                },
              }}
            >
              {coechipier.nume}
            </Typography>
          ))}
        </Stack>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              alignSelf: "flex-start",
              fontWeight: "bold",
              fontSize: "1.4rem",
            }}
          >
            Livrabile
          </Typography>

          <ModalaLivrabil
            open={isModalaOpen}
            onClose={handleCloseModala}
            onLivrabilAdaugat={() => {
              if (actualizeazaLivrabile) {
                actualizeazaLivrabile();
              }
            }}
            idProiect={idProiect}
            idJuriu={idJuriu}
          />
        </Box>

        <ListaLivrabileStudent arrLivrabile={arrLivrabile} />
      </Box>

      <ModalaProiect
        idEchipa={idEchipa}
        onProiectAdaugat={handleProiectAdaugat}
        proiectExistente={proiectExistente}
      />
    </Box>
  );
}
