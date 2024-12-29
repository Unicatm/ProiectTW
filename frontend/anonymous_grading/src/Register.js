import { Button, colors } from "@mui/material";
import React from "react";

const Register = () => {

    const buttonClicked = () => { 
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const confirmPasswordInput = document.getElementById("confirm_password");
        const nameInput = document.getElementById("first_name");
        const surnameInput = document.getElementById("last_name");
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const name = nameInput.value;
        const surname = surnameInput.value;

        if (email === "" || password === "" || confirmPassword === "" || name === "" || surname === "") {
            alert("Va rugam introduceti toate datele!");
        }
        else if(email.indexOf("@") === -1) {
            alert("Va rugam introduceti o adresa de email valida");
            emailInput.value = "";
            passwordInput.value = "";
            confirmPasswordInput.value = "";
        }
        else if(password.length < 8) {
            alert("Adresa de email trebuie sa aiba minim 8 caractere");
            passwordInput.value = "";
            confirmPasswordInput.value = "";
        }
        else if(password !== confirmPassword) {
            alert("Parolele nu coincid!");
            passwordInput.value = "";
            confirmPasswordInput.value = "";
        }
        else{
            alert("Contul a fost creat cu succes!");
        }
    }

    return (
        <div className="Register">
            <h1>Register</h1>
            <form>
               
                <div>
                    <label for="first_name">Nume:</label>
                    <input type="text" id="first_name" name="first_name" required></input>
                </div>

                <div>
                    <label for="last_name">Prenume:</label>
                    <input type="text" id="last_name" name="last_name" required></input>
                </div>

                <div>
                    <label for="email">Email:</label>
                <input type="text" id="email" name="email" required></input>
                </div>
                
                <div>
                    <label for="password">Parola:</label>
                    <input type="password" id="password" name="password" required></input>
                </div>
                
                <div>
                    <label for="confirm_password">Confirma Parola:</label>
                    <input type="password" id="confirm_password" name="confirm_password" required></input>
                </div>
                
                <div>
                <Button label="Register" id="registerBtn"  onClick={buttonClicked}  type="submit" >Register</Button>
                </div>
            </form>
        </div>
    );
}

export default Register;