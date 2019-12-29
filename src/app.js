import express from 'express'
import { Users } from './repositories'

const app = express()

app.get('/', (req, res) => {
  let users = Users.getUsers()
  return res.json({ users })
})

app.listen(3333)
