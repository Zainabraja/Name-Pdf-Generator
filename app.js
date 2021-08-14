const express = require('express');
const app = express();
const path = require('path');


app.set("view options", { layout: false });
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index.html');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})