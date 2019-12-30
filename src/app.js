import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
const app = express()

import User from './repositories/User'

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Desativa o X-Powered-By: Express
app.disable('x-powered-by')

// Criamos uma rota raiz com o texto Hello World!
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// GET /users
app.get('/users', (req, res) => {
  let users = User.getUsers()
  return res.json(users)
})

// POST /users
app.post('/users', (req, res) => {
  if (req.body.name) {
    if (User.addUser(req.body.name))
      return res.status(201).json({ message: 'Usuário criado.' })
    else return res.status(400).json({ message: 'Usuário já existe.' })
  } else {
    return res.status(400).json({ message: 'Dados incorretos.' })
  }
})

// Passamos a porta onde o servidor ficará ouvindo
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port: ${process.env.PORT}`)
})
