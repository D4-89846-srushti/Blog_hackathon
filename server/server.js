
const express = require('express')
const cors = require('cors')

const blogsRouter = require('./routes/blogs')



const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs',blogsRouter)




app.listen(4000,'localhost',()=>{
  console.log("server started on port 4000")
})

const express=require('express')
const app =express()

const userRoute=require('./routes/user')

app.use(express.json())
app.use('/user',userRoute)

app.listen(4000,'localhost',()=>{
    console.log("server started on port 4000")
})

