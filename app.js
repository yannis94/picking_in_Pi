let fs = require('fs');
let express = require("express");
let app = express();


app.use('/', express.static(__dirname + '/public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html")
});
let pi = "";
let stream = fs.createReadStream(__dirname + '/digitsPi/1M.txt', 'utf8');
stream.on("data", chunk => {
    pi += chunk;
})

app.get("/digitPi/:search", function(req, res) {

    
    let index = pi.indexOf(req.params.search);

    if (index < 0) {
        index = "not found"
    }
    else if (index == -1) {
        index = 2;
    }

    let my_obj = {
        "search": req.params.search,
        "result": index - 1
    }

    res.send(my_obj);
});



app.listen(3000);