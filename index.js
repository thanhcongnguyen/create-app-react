import express from 'express'
let app = express()
const PORT = 3000

//static file
app.use(express.static('public'))
app.use(express.static('dist'))

//using template engines with express
app.set('view engine', 'ejs')
app.set('views', './views')

//route
app.get('/', (req, res)=>{
    res.render('index')
})


app.listen(PORT, ()=>{
    console.log(`server running with port ${PORT}`)
})