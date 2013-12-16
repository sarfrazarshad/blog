var express= require('express'),
blogs= require('./routes/blogs');
var app= express();

app.get('/blogs', blogs.findAll);


app.get('/blogs/:id', blogs.findById);


app.listen(8080);
console.log('Server running at port 8080');


