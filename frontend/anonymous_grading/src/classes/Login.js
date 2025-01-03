import React, {useState, useEffect} from "react";
import utils from "./Utils";
import Button from "../components/Button";
import LogInForm from "../components/LogInForm"; 
import AlertComponent from "../components/Alert";
import useAlertSetter from "../hooks/useAlertSetter";
import fetchUsers from "../DBinteractions/fetchUsers";
import {BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const { alert, showAlert } = useAlertSetter();

    const buttonClicked = async () => {
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const email = emailInput.value;
        const password = passwordInput.value;

        if (utils.checkEmptyField(email) === false || utils.checkEmptyField(password) === false) {
           showAlert("error", "Toate campurile sunt obligatorii");
        }
        else if(utils.checkEmail(email) === false) {
            showAlert("error", "Email invalid");
            emailInput.value = "";
            passwordInput.value = "";
        }
        else if(utils.checkPassword(password) === false) {
           showAlert("error", "Parola trebuie sa aiba minim 8 caractere");
            passwordInput.value = "";
           
        }
        else if(utils.checkIfIncludesASE(email) === false){
            showAlert("error", "Emailul trebuie sa fie de tipul @stud.ase.ro sau @prof.ase.ro");
             emailInput.value = "";
             passwordInput.value = "";
         }
        else{
            const users = await fetchUsers();
            
            console.log(users);
            // Vedem daca utilizatorul exista
            const user = utils.checkIfUserExists(users, email);
            if (user === null){
                showAlert("error", "Utilizatorul cu email-ul respectiv nu exista!");
                emailInput.value = "";
                passwordInput.value = "";
            }
            else{
              if (utils.checkConfirmPassword(user['parola'], passwordInput.value)){
                 if (utils.checkIfProfessor(emailInput.value) == true){
                
                 navigate("/profesor", {state : {username: user.nume}} );
              }
            }
              else{
                showAlert("error", "Parola gresita")
                 passwordInput.value = "";
              }
               
            }          
           
        }
    }

    return (
       <div className="Login">
         <div>
         {alert.visible && (
                    <AlertComponent severity={alert.severity} message={alert.message} />
                )}
            <h1>Login to your account</h1>
             <LogInForm/>
            
            <div>
            <Button label="Log In" id="loginBtn"  onclick={buttonClicked}  type="submit" >Log In</Button>
            </div>
         </div>
         
         </div>
    );
}

export default Login;