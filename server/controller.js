module.exports = {

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
    }

}