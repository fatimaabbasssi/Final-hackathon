import jwt from "jsonwebtoken"

export let signInToken = (user)=>{
    return jwt.sign(
        {
            id: user._id,
            role: user.role,
            email : user.email
        },
        process.env.JWT_SECRET,
        {expiresIn : "1h"}  
    )
}

