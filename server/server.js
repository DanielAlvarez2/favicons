import express from 'express'
const app = express()
app.use(express.static('../dist'))
app.listen(process.env.PORT || 9007, ()=> console.log(`Server Running`))
app.get('/',(req,res)=>res.sendFile(index.html))