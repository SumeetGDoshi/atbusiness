
const express = require('express');
const BodyParser = require('body-parser');
var path = require('path');

const app = express()

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: false }))
app.use('/static', express.static(path.join(__dirname, '/build/static')));
app.use('/images', express.static(path.join(__dirname, '/build/images')));
app.use('/blogmedia',express.static(path.join(__dirname, '/media/blogs')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
})

// app.get(['/mobile', '/referals', '/mobile-careers', '/mobile-careers-details', '/press', '/blog-m', '/blog-mobile-post', '/freetrial'], (req, res)=>{
//     res.sendFile(path.join(__dirname+'/build/index.html'));
// })

// app.get(['/desktop', '/careers', '/careers-details', '/blog', '/blog-post', '/freetrial'], (req, res)=>{
//     res.sendFile(path.join(__dirname+'/build/index.html'));
// })


app.listen(8080, ()=>{
    console.log(`app started to listen on port ${8000}`)
})