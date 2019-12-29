import express from 'express'
import { Users } from './repositories'

const app = express()

app.get('/', (req, res) => {
  let users = Users.getUsers()
  let a = ['a', 'b']
  let b = { a: 'a', b: 'b' }
  return res.json({ users })
})

app.listen(3333)
