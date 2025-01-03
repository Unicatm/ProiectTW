import axios from "axios";

const addUser = async (user) => {
    try {
       // console.log("Adding user...");
        const response = await axios.post('http://localhost:8080/users', user);
       console.log("Response received:", response.data);
        return response.data; // Return the fetched data
    } catch (error) {
        console.error("Error adding user:", error.message);
        throw error; // Propagate the error for handling in the caller
    }
};

export default addUser;