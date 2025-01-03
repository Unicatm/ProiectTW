import Toolbar from "../components/Toolbar";
import CustomizedAccordions from "../components/ExpandableList";
import { useEffect, useState } from "react";
import fetchUsers from "../DBinteractions/fetchUsers";
import { useLocation } from "react-router-dom";

const ProfesorPage = () => {
    const location = useLocation();
    const userName = location.state?.username;
    //console.log(users);

    const livarbilele = Array(5).fill({
        "Jurat 1": 10,
        "Jurat 2": 9,
        "Jurat 3": 8,
        "Nota finala": 9,
    });

    const profesori = Array(5).fill({
        "Nume Proiect": "Proiectul 1",
        "Nr Livrabil": "2",
        "Nota Finala": "10",
    });



    // const expandedLists = users.length > 0
    //     ? livarbilele.map((livrabil, index) => (
    //         <CustomizedAccordions
    //             key={index}
    //             livarbilele={livrabil}
    //             profesori={profesori[0]} // Fallback to empty object
    //         />
    //     ))
    //     : null; 

    return (
        <div>
            <Toolbar name={userName} />
            <div><CustomizedAccordions
                livarbilele={livarbilele[0]}
                profesori={profesori[0]} // Fallback to empty object
            /></div>
        </div>
    );
};

export default ProfesorPage;
