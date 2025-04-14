const express = require('express')
const cors = require('cors')

const blogsRouter = require('./routes/blogs')
const userRouter=require('./routes/user')
const categoryRouter = require('./routes/category')
const authorization = require('./routes/authorization')


const app = express()

app.use(cors())
app.use(express.json())
app.use(authorization)
app.use('/blogs',blogsRouter)
app.use('/user',userRouter)
app.use('/category', categoryRouter)

app.listen(4000,'localhost',()=>{
    console.log("server started on port 4000")
})

