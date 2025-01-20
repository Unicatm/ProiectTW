import axios from "axios";

const getProiecte = async () => {
    try {
        const response = await axios.get('http://localhost:8080/proiecte/proiecte');
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
    }
}

export default getProiecte;