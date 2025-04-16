const express = require('express')
const cryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')

const pool = require('../database/db')
const result = require('../utils/result')
const config = require('../utils/config')

const router = express.Router()

router.post('/register', (req, res) => {
  const { full_name, email, password, phone_no } = req.body
  console.log(req.body)
  const encryptedPassword = String(cryptoJs.SHA256(password))
  const sql = `INSERT INTO user(full_name, email, password, phone_no) VALUES(?,?,?,?)`
  pool.query(
    sql,
    [full_name, email, encryptedPassword, phone_no],
    (error, data) => {
      res.send(result.createResult(error, data))
    }
  )
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  const encryptedPassword = String(cryptoJs.SHA256(password))
  const sql = `SELECT * FROM user WHERE email = ? AND password = ?`
  pool.query(sql, [email, encryptedPassword], (error, data) => {
    if (data) {
      if (data.length != 0) {
        // console.log('hello')
        const payload = {
          user_id: data[0].user_id,
        }
        const token = jwt.sign(payload, config.secret)
        // console.log(token)
        const body = {
          token: token,
          full_name: data[0].full_name
        }
        // console.log(body)
        res.send(result.createSuccessResult(body))
      } else res.send(result.createErrorResult('Invalid email or password'))
    } else res.send(result.createErrorResult(error))
  })
})




module.exports = router
