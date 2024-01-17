const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var DB = {
    games:[
        {
            id: 23,
            title: "The legend of Zelda Breath of The Wild",
            year: 2017,
            price: 300
        },
        {
            id: 2,
            title: "The legend of Zelda ocarina of time",
            year: 1998,
            price: 500
        },
        {
            id: 15,
            title: "Valorant",
            year: 2020,
            price: 0
        },
    ]
}

app.get("/games", (req,res) => {
    res.statusCode = 202;
    res.json(DB.games);
});

app.listen(45678, () => {
    console.log("Servidor aberto")
});