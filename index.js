import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import * as dotenv from "dotenv"
dotenv.config()

// import routes
import authRoute from "./routes/auth.js"
import posts from './routes/posts.js'


const app = express()

// middleware
app.use(bodyParser.json())

// route middlewares
app.use('/api/user', authRoute)
app.use('/api/posts', posts)


app.listen(3000, ()=> {
    console.log('server up and running at port 3000')
})

// connect to db
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true})
    .then(()=> {console.log('connected to db')})
    .catch((error)=> {console.log(error)})

