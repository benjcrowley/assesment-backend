const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createAirBnb, getAllAirBnbs, deleteAirBnb, changeAirBnbGuests } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/airBnb", createAirBnb)
app.get("/api/airBnb", getAllAirBnbs)
app.delete('/api/airBnb/:id', deleteAirBnb)
app.put('/api/airBnb/:id', changeAirBnbGuests)


app.listen(4000, () => console.log("Server running on 4000"));

// ,
//     {
//         "id": 3,
//         "location": "alaska",
//         "guests": 4,
//         "imageURL" : "server/AlaskaAirBnb/Screen Shot 2022-10-21 at 10.32.54 AM.png"
//     },
//     {
//         "id": 4,
//         "location": "puertoRico",
//         "guests": 1,
//         "imageURL" : "server/puertoRicoAirBnb/Screen Shot 2022-10-21 at 10.27.39 AM.png"
//     },
//     {
//         "id": 5,
//         "location": "puertoRico",
//         "guests": 2,
//         "imageURL" : "server/puertoRicoAirBnb/Screen Shot 2022-10-21 at 10.28.05 AM.png"
//     },
//     {
//         "id": 6,
//         "location": "puertoRico",
//         "guests": 4,
//         "imageURL" : "server/puertoRicoAirBnb/Screen Shot 2022-10-21 at 10.28.48 AM.png"
//     }
