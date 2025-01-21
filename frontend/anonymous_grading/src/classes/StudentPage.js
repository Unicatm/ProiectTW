import NavMenu from "../components/NavMenu";
import ModalaEchipa from "../components/ModalaEchipa";
import StudentEchipa from "../components/StudentEchipa";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function StudentPage() {
  const [student, setStudent] = useState(null);
  const [echipa, setEchipa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [arrCoechipieri, setArrCoechipieri] = useState([]);
  const [idEchipa, setIdEchipa] = useState(null);
  const [idProiect, setIdProiect] = useState(null);
  const [arrLivrabile, setArrLivrabile] = useState(null);

  const location = useLocation();
  const id = location.state?.id;

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setStudent(data);
          setLoading(false);
          setIdEchipa(data.idEchipa);
        })
        .catch((error) => {
          console.error("Eroare:", error);
          setLoading(false);
        });
    }
  }, [id]);

  console.log(student);

  useEffect(() => {
    if (idEchipa !== null) {
      fetch(`http://localhost:8080/users/echipa/${idEchipa}`)
        .then((response) => response.json())
        .then((data) => {
          setArrCoechipieri(data);
        })
        .catch((error) => {
          console.error("Eroare la fetch echipa:", error);
        });
    }
  }, [idEchipa]);

  console.log("ID ECH" + idEchipa);

  useEffect(() => {
    if (idEchipa !== null) {
      fetch(`http://localhost:8080/proiecte/echipa/${idEchipa}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data[0]) {
            const proiectId = data[0].id;
            console.log("==============");
            console.log(proiectId);
            setIdProiect(proiectId);

            fetch(`http://localhost:8080/livrabile/proiect/${proiectId}`)
              .then((response) => response.json())
              .then((dataLivrabile) => {
                setArrLivrabile(dataLivrabile);
              })
              .catch((error) => {
                console.error("Eroare la fetch livrabile:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Eroare la fetch proiect:", error);
        });
    }
  }, [idEchipa]);

  useEffect(() => {
    if (idEchipa !== null) {
      fetch(`http://localhost:8080/echipe/${idEchipa}`)
        .then((response) => response.json())
        .then((data) => {
          setEchipa(data);
        })
        .catch((error) => {
          console.error("Eroare la fetch echipa:", error);
        });
    }
  }, [idEchipa]);

  const actualizeazaLivrabile = () => {
    if (idProiect !== null) {
      fetch(`http://localhost:8080/livrabile/proiect/${idProiect}`)
        .then((response) => response.json())
        .then((dataLivrabile) => {
          setArrLivrabile(dataLivrabile);
        })
        .catch((error) => {
          console.error("Eroare la re-fetch livrabile:", error);
        });
    }
  };

  console.log(echipa);

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "fit-content",
      }}
    >
      <NavMenu idEchipa={idEchipa} idUser={id} />
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
        {loading ? (
          <p>Se încarcă...</p>
        ) : idEchipa === null ? (
          <ModalaEchipa
            onEchipaCreata={(nouIdEchipa) => {
              setIdEchipa(nouIdEchipa);
              fetch(`http://localhost:8080/echipe/${nouIdEchipa}`)
                .then((response) => response.json())
                .then((data) => {
                  setEchipa(data);
                })
                .catch((error) =>
                  console.error("Eroare la fetch echipa:", error)
                );

              fetch(`http://localhost:8080/users/echipa/${nouIdEchipa}`)
                .then((response) => response.json())
                .then((data) => {
                  setArrCoechipieri(data);
                })
                .catch((error) =>
                  console.error("Eroare la fetch coechipieri:", error)
                );
            }}
          />
        ) : (
          echipa && (
            <StudentEchipa
              numeEchipa={echipa.nume}
              arrCoechipieri={arrCoechipieri}
              arrLivrabile={arrLivrabile}
              notaFinala={echipa.notaFinala}
              idJuriu={1}
              idProiect={idProiect}
              idEchipa={idEchipa}
              actualizeazaLivrabile={actualizeazaLivrabile}
            />
          )
        )}
      </Box>
    </Box>
  );
}
