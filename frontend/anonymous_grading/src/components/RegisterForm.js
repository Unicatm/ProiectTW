import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';  

const RegisterForm = () => {   
    return (
        <Box 
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
           >
         <div>
            <TextField
                error={false}
                required
                id="first_name"
                label="Nume"
                defaultValue=""
                variant="outlined"
                size="small"
                helperText=""
            />
            </div>
            <div>
            <TextField
                error={false}
                required
                id="last_name"
                label="Prenume"
                defaultValue=""
                variant="outlined"
                size="small"
                helperText=""
            />
            </div>
            <div>
            <TextField
                error={false}
                required
                id="email"
                label="Email"
                defaultValue=""
                variant="outlined"
                size="small"
                helperText=""
            />
            </div>
            <div>
            <TextField
                error={false}
                required
                id="password"
                label="Parola"
                defaultValue=""
                type="password"
                variant="outlined" 
                size="small"
                helperText=""/>
            </div>
            
            <div>
            <TextField
                error={false}
                required
                id="confirm_password"
                label="Confirma Parola"
                defaultValue=""
                type="password"
                variant="outlined"
                size="small"
                helperText=""/>
                </div>
         
            
        </Box>
    );
}

export default RegisterForm;