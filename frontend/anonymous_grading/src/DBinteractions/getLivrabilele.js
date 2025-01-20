import axios from "axios";

const getLivrabilele = async () => {
    try {
        const response = await axios.get('http://localhost:8080/livrabile');
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error;
    }
}

export default getLivrabilele;