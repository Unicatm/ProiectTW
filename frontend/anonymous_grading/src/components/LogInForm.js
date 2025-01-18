import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';  

const LogInForm = () => {

    return (
        <Box 
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
           >
            <div>
                <TextField
                    required
                    id="email"
                    label="Email"
                    defaultValue=""
                    type="text"
                    variant="outlined"
                    size="small"/>
                </div>
                <div>
                <TextField
                    required
                    id="password"
                    label="Parola"
                    defaultValue=""
                    variant="outlined"
                    type="password"
                    size="small"/>
            </div>

            </Box>
    );
}

export default LogInForm;