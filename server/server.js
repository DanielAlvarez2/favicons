import express from 'express'
const app = express()
const PORT = process.env.PORT || 9103
app.listen(PORT, console.log(`Server Running: ${PORT}`))
app.get('/', async (req, res)=>res.sendFile('./index.html'))