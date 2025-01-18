import axios from "axios";

const getProiecte = async () => {
    try {
        console.log("Fetching data from /proiecte...");
        const response = await axios.get('http://localhost:8080/proiecte/proiecte');
        console.log("Response received:", response.data);
        return response.data; // Return the fetched data
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error; // Propagate the error for handling in the caller
    }
}

export default getProiecte;