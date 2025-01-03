import Toolbar from "../components/Toolbar";
import CustomizedAccordions from "../components/ExpandableList";
import { useEffect, useState } from "react";
import fetchUsers from "../DBinteractions/fetchUsers";

const ProfesorPage = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers(); 
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadUsers();
    }, []);

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

    const numeProfesor = users.length > 0 ? users[0].nume : "Loading...";

    const expandedLists = users.length > 0
        ? livarbilele.map((livrabil, index) => (
            <CustomizedAccordions
                key={index}
                livarbilele={livrabil}
                profesori={profesori[0]} // Fallback to empty object
            />
        ))
        : null; 

   
    if (isLoading) {
        return <div>Loading...</div>; 
    }

    if (users.length === 0) {
        return <div>No users found.</div>; 
    }

    return (
        <div>
            <Toolbar name={numeProfesor} />
            <div>{expandedLists}</div>
        </div>
    );
};

export default ProfesorPage;
