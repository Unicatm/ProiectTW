class User{
    #name;
    #role;
    #email;
    #password;
    constructor(name, role, email, password){
        this.#name = name;
        this.#role = role;
        this.#email = email;
        this.#password = password;
    }

   get name(){
        return this.#name;
    }

    get role(){
        return this.#role;
    }

    get email(){
        return this.#email;
    }

    get password(){
        return this.#password;
    }


   
}

export default User;    