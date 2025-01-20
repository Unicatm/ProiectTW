import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccordionDetails from "@mui/material/AccordionDetails";
import Stack from "@mui/material/Stack";

export default function ListaLivrabileStudent({ arrLivrabile }) {
  if (!Array.isArray(arrLivrabile)) {
    return <Typography>Nu sunt livrabile disponibile.</Typography>;
  }
  return (
    <Box sx={{ width: "100%" }}>
      {arrLivrabile.map((livrabil, idx) => (
        <Accordion
          key={idx}
          sx={{ borderRadius: "10px", margin: "0 0 1rem 0" }}
          slotProps={{ heading: { component: "h4" } }}
        >
          <AccordionSummary
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              {livrabil.titlu}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              <Typography>
                <b>Titlu:</b> {livrabil.titlu}
              </Typography>
              <Typography>
                <b>Descriere:</b> {livrabil.descriere}
              </Typography>
              <Typography>
                <b>Link:</b>{" "}
                <a
                  href={livrabil.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {livrabil.link}
                </a>
              </Typography>
              <Typography>
                <b>Data:</b> {livrabil.data}
              </Typography>
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
