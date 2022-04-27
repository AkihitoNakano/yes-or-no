const path = require('path')
const express = require('express')
const hbs = require('hbs')

const port = process.env.PORT || 3000

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// register view engine
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Judgement',
    })
})

app.listen(port, () => 'Server is running on port ' + port)
