class User{
    #id;
    #name;
    #surname
    #role;
    #email;
    #password;
    #identificator;
    constructor(id, name, surname, role, email, password){
        this.#id = id;
        this.#name = name;
        this.#surname = surname;
        this.#role = role;
        this.#email = email;
        this.#password = password;
    }

    get id(){
        return this.#id;
    }

   get name(){
        return this.#name;
    }

    get surname(){
        return this.#surname;
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

    /**
     * @returns {String} the identificator of the user
     */
    setIdentificator(){
        this.#identificator = this.#name.substring(0, 1) + this.#surname.substring(0, 1) +this.#id;
    }

   
}

export default User;    