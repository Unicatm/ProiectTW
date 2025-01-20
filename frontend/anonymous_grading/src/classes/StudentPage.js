import NavMenu from "../components/NavMenu";
import ModalaEchipa from "../components/ModalaEchipa";
import StudentEchipa from "../components/StudentEchipa";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";

export default function StudentPage() {
  const arrCoechipieri = [{ nume: "Ion" }, { nume: "Vasile" }];
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
      <StudentEchipa
        numeEchipa="Cei mai tari"
        arrCoechipieri={arrCoechipieri}
      />
    </Box>
  );
}
