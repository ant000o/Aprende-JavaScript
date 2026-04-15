class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'ValidationError'
    }
}

class AuthError extends Error {
    constructor(mensaje) {
        super(mensaje)
        this.name = "AuthError"
    }
}


function registerUser(user){
    if (!user.email) {
        throw new ValidationError("Email is required");
    } else if (user.password.length < 6) {
        throw new ValidationError("Password must be at least 6 characters");
    } else if (user.age < 18) {
        throw new ValidationError("User must be 18+");
    } else {
        return 'User registered successfully'
    }
}


function loginUser(email, password) {
    const savedUser = {
        email: "test@mail.com",
        password: "123456"
    }

    if (email !== savedUser.email) {
        throw new AuthError("Invalid email")
    }

    if (password !== savedUser.password) {
        throw new AuthError("Invalid password")
    }

    return "Login successful"
}

try {
    registerUser({ email: "", password: "123", age: 16 })
    loginUser("test@mail.com", "123456")
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("Validation error:", error.message)
    } else if (error instanceof AuthError) {
        console.log("Auth error:", error.message)
    } else {
        console.log("Unknown error:", error.message)
    }
} finally {
    console.log("Process finished")
}