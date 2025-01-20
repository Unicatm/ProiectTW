import Toolbar from "../components/Toolbar";
import CustomizedAccordions from "../components/ExpandableList";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const ProfesorPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userName = location.state?.username;
    const date = location.state?.date;
    const authKey = localStorage.getItem("authTokenP");

    useEffect(() => { 
        if (!authKey) {
            navigate("/Login");
        }
    })
    
    const handleLogOut = () => {    
        localStorage.removeItem("authTokenP");
         navigate("/Login");
    }
     console.log("date",date);    
    //console.log(users);

    let datePrintare = []
    for (let i = 0; i < date.length; i++) 
    {
       const obiect = date[i];

       const proiect = obiect.proiect;
       const livrabile = obiect.livrabile;
       let media = 0;
       if (livrabile.length > 0) {
            
            for (let j = 0; j < livrabile.length; j++) {
                 media += livrabile[j].nota;
            }
            media = parseFloat((media / livrabile.length).toFixed(2));
       }
       const proiectPrinted = {
          titlu: proiect.titlu,
          NumarLivrabile: livrabile.length,
          Media: media
       }

       const livrabilePrinted = livrabile.map(element => {
        return {
            nume: element.titlu,
            nota: element.nota
        };
       });
       
       datePrintare.push({
           proiect: proiectPrinted,
           livrabile: livrabilePrinted
       });
    }


    return (
        <div>
            <Toolbar name={userName} handleLogOut={handleLogOut}/>
            <div><CustomizedAccordions
                datePrintare={datePrintare} // Fallback to empty object
            /></div>
        </div>
    );
};

export default ProfesorPage;