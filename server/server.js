
const express = require('express')
const app =express()
const cors = require('cors')

const userRoute=require('./routes/user')

const blogsRouter = require('./routes/blogs')

app.use(cors())
app.use(express.json())
app.use('/blogs',blogsRouter)
app.use('/user',userRoute)

app.listen(4000,'localhost',()=>{
  console.log("server started on port 4000")
})



