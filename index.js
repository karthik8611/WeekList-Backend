const express = require('express');
const connectDb=require('./config/dbConnection')
const  dotenv = require('dotenv').config();
const allUserRoutes = require('./routes/userRoutes')
const allWeekListRoutes = require('./routes/weekListRoutes')
const allTaskRoutes = require('./routes/taskRoutes')
const cookieParser = require('cookie-parser')
const app = express()


connectDb();
// middleware
app.use(express.json())




app.use(express.json())
app.use(cookieParser())
app.use('/api/v1', allUserRoutes)
app.use('/api/v1', allWeekListRoutes)
app.use('/api/v1', allTaskRoutes)

// app.use('/api/',require('./routes/userRoutes'))
// app.use(errorhandler)
// app.use('/api',CreateRouter)


const port =process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})