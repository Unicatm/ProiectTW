import axios from "axios";

const getNote = async () => {
    try {
        //console.log("Fetching data from /note...");
        const response = await axios.get('http://localhost:8080/note');
        //console.log("Response received:", response.data);
        return response.data;
    } catch (error) {
        //console.error("Error fetching data:", error.message);
        throw error; // Propagate the error for handling in the caller
    }
}

export default getNote;