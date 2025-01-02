import React from "react";
import Toolbar from "../components/Toolbar";
import CustomizedAccordions from "../components/ExpandableList";

const ProfesorPage = () => {

    const livarbilele = []
    for (let i = 0; i < 5; i++) {
        livarbilele.push({
            "Jurat 1": 10,
            "Jurat 2": 9,
            "Jurat 3": 8,
            "Nota finala": 9

        })
    }

    const profesori = []
    for (let i = 0; i < 5; i++) {
        profesori.push({
            "Nume Proiect": "Proiectul 1",
            "Nr Livrabil": "2",
            "Nota Finala": "10"});
    }

    const expandedLists = []
    for (let i = 0; i < 5; i++) {
        expandedLists.push(<CustomizedAccordions livarbilele={livarbilele[i]} profesori={profesori[i]}/>);
    }

    return (
        <div>
            <Toolbar name="Kristian Prendi"/>
            <div>
                {expandedLists}
            </div>
        </div>
        
    );
}

export default ProfesorPage;