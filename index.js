const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var DB = {
    games: [
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

app.get("/games", (req, res) => {
    res.json(DB.games);
    res.status(200);
})

app.get("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = req.params.id
        var game = DB.games.find(g => g.id == id)
        if(game != undefined){
            res.json(game)
            res.sendStatus(200);
        }else{
            res.sendStatus(400)
        }
    }
})

app.post("/game", (req, res) => {
    var { title, year, price } = req.body
 
    DB.games.push({
        id: 2323,
        title,
        price,
        year,
    })
    res.sendStatus(200);
})

app.delete("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id); // Convertendo de texto para INT
        var index = DB.games.findIndex(g => g.id == id);

        if (index == -1) {
            res.sendStatus(404);
        } else {
            DB.games.splice(index, 1);
            res.sendStatus(200);
        }
    }
})

app.put("/game/:id", (req,res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id);
        if (game != undefined) {
        var { title, year, price } = req.body

        if(title != undefined){
            game.title = title
        }
        if(year != undefined){
            game.year = year
        }
        if(price != undefined){
            game.price = price
        }
        res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    }
})

app.listen(45678, () => {
    console.log("Servidor aberto")
});