const express = require('express')

const app = express()

// register view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => 'Server is running on port 3000')
