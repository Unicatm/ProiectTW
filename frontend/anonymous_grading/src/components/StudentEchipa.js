import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ListaLivrabileStudent from "./ListaLivrabileStudent";

export default function StudentEchipa({
  numeEchipa,
  arrCoechipieri,
  notaFinala,
}) {
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
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <Typography>
          <span style={{ fontWeight: "bold" }}>Nume echipă:</span> {numeEchipa}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>Coechipieri</Typography>
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
        <Typography>
          <span style={{ fontWeight: "bold" }}>Nota proiect:</span>
          {notaFinala != null ? notaFinala : " Nu e notat"}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem",
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
        <ListaLivrabileStudent />
      </Box>
    </Box>
  );
}
