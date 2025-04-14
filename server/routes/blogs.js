const express = require('express')
const pool = require('../database/db')
const result = require('../utils/result')

const router = express.Router()

router.post('/createblog',(req, res)=>{
  const user_id = req.headers.user_id
  const { title , category_id , content} = req.body
  const sql = `INSERT INTO blogs(title , content , user_id , category_id) VALUES (?,?,?,?)`
  pool.query(sql ,[title ,  content , user_id ,category_id], (error,data)=>{
    res.send(result.createResult(error,data))
  })

})

router.put('/editblog',(req,res)=>{
  const { title , category_id , content} = req.body
  const user_id = req.headers.user_id
  const sql = `UPDATE  blogs SET title = ? , content = ? , category_id = ?  WHERE id = ?`
  pool.query(sql,[title ,  content, category_id , user_id],(error,data)=>{
    res.send(result.createResult(error,data))
  })


})

router.get('/myblogs', (req,res)=>{
  const user_id = req.headers.user_id
  const sql = `SELECT * FROM blogs WHERE user_id = ?`
  pool.query(sql,[user_id],(error,data)=>{
    res.send(result.createResult(error,data))
  })
})

router.get('/allblogs',(req,res)=>{
const sql = `SELECT * FROM blogs`
pool.query(sql,(error,data)=>{
  res.send(result.createResult(error,data))
})
})

router.delete('/deleteblog',(req,res)=>{
  const blogID = req.body
  const sql = `DELETE FROM blogs WHERE blogID = ?`
  pool.query(sql,[blogID],(error, data)=>{
    res.send(result.createResult(error,data))
  })
})

module.exports = router