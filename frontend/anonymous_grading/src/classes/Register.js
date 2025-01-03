import Button from "../components/Button";
import React, { useState } from "react";
import Utils from "./Utils";
import RegisterForm from "../components/RegisterForm";
import AlertComponent from "../components/Alert";
import User from "./User";
import useAlertSetter from "../hooks/useAlertSetter";
import addUser from "../DBinteractions/addUser";


const Register = () => {
    const { alert, showAlert } = useAlertSetter();
    const buttonClicked = async () => { 
       
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

        if (Utils.checkEmptyField(name) === false) {
           showAlert("error", "Numele este obligatoriu");
           
        }
        
        else if (Utils.checkEmptyField(surname) === false){
            showAlert("error", "Prenumele este obligatoriu");
        }
        
        else if (Utils.checkEmptyField(email) === false){
            showAlert("error", "Emailul este obligatoriu");
        }
        
        else if (Utils.checkEmptyField(password) === false){
            showAlert("error", "Parola este obligatorie");
        }
        
        else if (Utils.checkEmptyField(confirmPassword) === false){
          showAlert("error", "Confirmarea parolei este obligatorie");
        }
        
        else if(Utils.checkforNumbers(name) === true || Utils.checkforNumbers(surname) === true) {
            showAlert("error", "Numele si prenumele nu pot contine cifre");
            nameInput.value = "";
            surnameInput.value = "";

        }
        else if(Utils.checkEmail(email) === false) {
            showAlert("error", "Email invalid");
            emailInput.value = "";
            passwordInput.value = "";
            confirmPasswordInput.value = "";
        }
        else if(Utils.checkPassword(password) === false) {
            showAlert("error", "Parola trebuie sa aiba minim 8 caractere");
           passwordInput.error = true;
           passwordInput.helperText = "Parola trebuie sa aiba minim 8 caractere";
            passwordInput.value = "";
            confirmPasswordInput.value = "";
        }
        else if(Utils.checkConfirmPassword(password, confirmPassword) === false) {
           showAlert("error", "Parolele nu coincid");
            passwordInput.value = "";
            confirmPasswordInput.value = "";
            
        }
        else if(Utils.checkIfIncludesASE(email) === false){
           showAlert("error", "Emailul trebuie sa fie de tipul @stud.ase.ro sau @prof.ase.ro");
            emailInput.value = "";
            passwordInput.value = "";
            confirmPasswordInput.value = "";
        }
        else{
           if(Utils.checkIfProfessor(email)){
                const numeComplet = name+" "+surname;
                const user = {
                     nume: numeComplet,
                     email: email,
                     parola: password,
                     rol: "profesor"
                }
                //const user = new User(numeComplet, "profesor", email, password);
                //user.setIdentificator();
                console.log(user);
                await addUser(user);

                showAlert("success", "Contul de Profesor creat cu Succes");
           }
           else{
            const numeComplet = name+" "+surname;
            const user = {
                 nume: numeComplet,
                 email: email,
                 parola: password,
                 rol: "student"
            }         
            await addUser(user);      
               // console.log(user);
                showAlert("success", "Contul de Student creat cu Succes");
           }
           
        }
    }

    return (
        <div className="Register">
            {alert.visible && 
            <AlertComponent severity={alert.severity} message={alert.message} />
            }
            <h1>Register</h1>
            
            <RegisterForm />
                
                <div>
                <Button label="Register" id="registerBtn"  onclick={buttonClicked}  type="submit" >Register</Button>
                </div>
            
        </div>
    );
}

export default Register;