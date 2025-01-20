import axios from "axios";

const addUser = async (user) => {
    try {
        const response = await axios.post('http://localhost:8080/users', user);
       console.log("Response received:", response.data);
        return response.data; 
    } catch (error) {
        console.error("Error adding user:", error.message);
        throw error; 
    }
};

export default addUser;