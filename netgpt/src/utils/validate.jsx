

export const validateCredentials=(email,password)=>{

    const validateEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)

    const validatePassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)

    if(!validateEmail) return "Please enter a valid email address";
    if(!validatePassword) return "Invalid password!"

    return null;
}
