const express = require('express')
const cors = require('cors')

const blogsRouter = require('./routes/blogs')



const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs',blogsRouter)




app.listen(4000,'localhost',()=>{
  console.log('server is listening..')
})
