import React from "react";

const Login = () => {

    const buttonClicked = () => {
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const email = emailInput.value;
        const password = passwordInput.value;

        if (email === "" || password === "") {
            alert("Va rugam introduceti email si parola");
        }
        else if(email.indexOf("@") === -1) {
            alert("Va rugam introduceti un email valid");
            emailInput.value = "";
            passwordInput.value = "";
        }
        else if(password.length < 8) {
            alert("Parola trebuie sa aiba minim 8 caractere");
            passwordInput.value = "";
        }
        else{
            alert("Login reusit");
        }
    }

    return (
       <div className="Login">
         <div>
            <h1>Login to your account</h1>
         </div>

         <div>
            <form>
                <div>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" required></input>
                </div>

                <div>
                    <label for="password">Parola:</label>
                    <input type="password" id="password" name="password" required></input>
                </div>
            </form>
            <div>
                <button type="submit" onClick={buttonClicked}>Login</button>
            </div>
         </div>


        </div>
    );
}

export default Login;