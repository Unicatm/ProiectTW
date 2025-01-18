import axios from "axios";

const getLivrabilele = async () => {
    try {
        console.log("Fetching data from /livrabile...");
        const response = await axios.get('http://localhost:8080/livrabile');
        console.log("Response received:", response.data);
        return response.data; // Return the fetched data
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error; // Propagate the error for handling in the caller
    }
}

export default getLivrabilele;