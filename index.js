var express = require('express')

var app = express()
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.get('/', function (req, res) {
    res.send('strona główna')
})
app.get('/styles.css', function (req, res) {
    res.sendFile(`${__dirname}/views/styles.css`)
})
app.get('/script.js', function (req, res) {
    res.sendFile(`${__dirname}/views/script.js`)
})
app.get('/vid/:vidId', function (req, res) {
    res.render(`${__dirname}/views/index.html`, {
        video: {
            title: 'Test',
            views: 1,
            time: {formated: 'Dzisiaj 18:37'},
            like: 6,
            dislike: 9,
            comments: [
                {
                    author: 'John',
                    data: 'coś tam',
                    time: {formated: 'Wczoraj'},
                    like: 1,
                    report: []
                },
                {
                    author: 'John',
                    data: 'coś tam',
                    time: {formated: 'Wczoraj'},
                    like: 1,
                    report: []
                },
                {
                    author: 'John',
                    data: 'coś tam',
                    time: {formated: 'Wczoraj'},
                    like: 1,
                    report: []
                }
            ]
        },
        rec: [{video: {title: 'Tytuł', author: 'Autor', info: 'Info', id: 0}}]
    })
})
app.get('/api/sub/:vidId', function (req, res) {
    res.sendFile(`${__dirname}/videos/subtitles`)
})
app.get('/styles.css', function (req, res) {
    res.sendFile(`${__dirname}/views/styles.css`)
})
app.get('/testvid', function (req, res) { res.sendFile(`${__dirname}/videos/file/test.mp4`) })
app.listen(2222)