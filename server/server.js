const express=require('express')
const app =express()
const userRoute=require('./routes/user')

app.use(express.json())
app.use('/user',userRoute)

app.listen(4000,'localhost',()=>{
    console.log("server started on port 4000")
})