const express = require('express')
const pool = require('../database/db')
const result = require('../utils/result')
const router = express.Router()

router.post('/addcategory',(req,res)=>{
  const  {title , description } = req.body
  const sql = `INSERT INTO categories (title ,description  ) VALUES (?,?)`
  pool.query(sql , [title , description],(error,data)=>{
    res.send(result.createResult(error,data))
  })
})

router.get('/allcategories',(req,res)=>{
  const sql = `SELECT * FROM categories`
  pool.query(sql,(error,data)=>{
    res.send(result.createResult(error,data))
  })
})

router.delete('/deletecategory/:id',(req,res)=>{
  const category_id = req.params.id
  const sql = `DELETE FROM categories WHERE category_id = ?`
  pool.query(sql,[category_id],(error,data)=>{
    res.send(result.createResult(error,data))
  })
})
module.exports = router