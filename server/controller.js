const airBnbs = require('./db.json')

module.exports = {
    getAllAirBnbs: (req, res) => res.status(200).send(airBnbs),

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["No snowflake in an avalanche ever feels responsible", 'About time I got out of that cookie', 'You will marry a professional althlete - unfortunately they play professional disc golf', 'A beautiful, smart, and loving person will be coming into your life, and then leave.', 'Ask not what your fortune cookie can do for you, but what you can do for your fortune cookie', 'Your fortune: $1,000,000 split between you and your ugliest cousin', 'Remember to never forget.', 'Thats a nice family you got there, it would be a real shame if something were to happen to it...']

        //choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },
    createNewFortune: (req, res) => {

    },
    deleteAirBnb: (req, res) => {
        const deleteId = req.params.id
        let index = airBnbs.findIndex(element => element.id === +deleteId)
        airBnbs.splice(index, 1)
        res.status(200).send(airBnbs)
    },

    changeAirBnbGuests: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = airBnbs.findIndex(elem => +elem.id === +id)

        if (airBnbs[index].guests === 5 && type === 'plus') {
            res.status(400).send('cannot go above 5')
        } else if (airBnbs[index].guests === 0 && type === 'minus') {
            res.status(400).send('cannot go below 0')
        } else if (type === 'plus') {
            airBnbs[index].guests++
            res.status(200).send(airBnbs)
        } else if (type === 'minus') {
            airBnbs[index].guests--
            res.status(200).send(airBnbs)
        } else {
            res.sendStatus(400)
        }
    },

    createAirBnb: (req, res) => {
        console.log('working on it')
        const {location, imageURL, guests} = req.body
        console.log(req.body)
        //find the next id
        let greatestId = -1
        for (let i = 0; i < airBnbs.length; i++) {
            if (airBnbs[i].id > greatestId) {
                greatestId = airBnbs[i].id
            }
        }
        let nextId = greatestId + 1
        let newAirBnb = {
            id: nextId,
            location: "location: " + location,
            guests,
            imageURL
        }
        airBnbs.push(newAirBnb)
        res.status(200).send(airBnbs)
        console.log(airBnbs)
    }

}