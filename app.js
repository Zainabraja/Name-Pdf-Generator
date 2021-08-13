const express = require('express');
const app = express();
const path = require('path');


app.set("view options", { layout: false });
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index.html');
});


app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
