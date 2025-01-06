import NavMenu from "../components/NavMenu";
import ModalaEchipa from "../components/ModalaEchipa";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";

export default function StudentPage() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <NavMenu />
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <ModalaEchipa />
      </Box>
    </Box>
  );
}
