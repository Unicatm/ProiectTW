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
     

    let datePrintare = []
    for (let i = 0; i < date.length; i++) {
        let proiect = date[i].proiect;
        let livrabile = date[i].livrabile;
        let numeProiect = proiect.titlu;
        let numarLivrabile = livrabile.length;

        let media = 0;
        let suma = 0;
        let count  = 0;
        for (let livrabil of livrabile) {
           for (let nota of livrabil.notes) {
               suma += nota.nota;
               count++;
           }
        } 
        media = suma / count;
        
        let dateProiect = {
            proiect: {
                titlu: numeProiect,
                NumarLivrabile: numarLivrabile,
                Media: media
            },
            livrabile: []
        };

        for (let livrabil of livrabile) {
            let numeLivrabil = livrabil.nume;
            let note = [];
            for (let nota of livrabil.notes) {
                note.push(nota.nota);
            }
            let dateLivrabil = {
                nume: numeLivrabil,
                nota: note
            };
            dateProiect.livrabile.push(dateLivrabil);
        }
       
        datePrintare.push(dateProiect);
    }
    //console.log("datePrintare", datePrintare);

    return (
        <div>
            <Toolbar name={userName} handleLogOut={handleLogOut}/>
            <div><CustomizedAccordions
                datePrintare={datePrintare} 
            /></div>
        </div>
    );
};

export default ProfesorPage;