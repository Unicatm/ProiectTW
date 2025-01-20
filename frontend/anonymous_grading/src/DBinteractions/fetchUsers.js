import axios from 'axios';

const fetchUsers = async () => {
    try {
        const response = await axios.get('http://localhost:8080/users');
        return response.data; 
    } catch (error) {
        console.error("Error fetching data:", error.message);
        throw error; 
    }
};

export default fetchUsers;
