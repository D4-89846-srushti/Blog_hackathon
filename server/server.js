const express = require('express')
const app =express()
const cors = require('cors')




const blogsRouter = require('./routes/blogs')
const userRouter=require('./routes/user')
const categoryRouter = require('./routes/category')
const authorization = require('./routes/authorization')


app.use(cors())
app.use(express.json())
app.use(authorization)
app.use('/blogs',blogsRouter)
app.use('/category', categoryRouter)
app.use('/user',userRouter)

app.listen(4000,'localhost',()=>{
  console.log("server started on port 4000")
})








