import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbConnection from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import ratingRoutes from './routes/ratingRoutes.js'
let app = express()




dotenv.config()
dbConnection()

//middleware
app.use(express.json())
app.use(cors())

console.log(process.env.MONGO_URI);

app.use('/api/auth' , authRoutes)
app.use('/api/rate' , ratingRoutes)


app.get('/', (req , res)=>{
    res.send('Hello Final hackathon!!!')
})


/////PORT CONNECTION SERVER
app.listen(process.env.PORT , ()=> console.log(`Server is running on port ${process.env.PORT}`)
)

