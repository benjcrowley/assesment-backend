const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.getElementById('fortuneButton')
const airBnbsContainer = document.querySelector('#airBnb-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/airBnb`

const airBnbCallback = ({ data: AirBnbs }) => displayAirBnbs(AirBnbs)
const errCallback = err => console.log(err.response.data)

const getAllAirBnbs = () => axios.get(baseURL).then(airBnbCallback).catch(errCallback)
const createAirBnb = body => axios.post(baseURL, body).then(airBnbCallback).catch(errCallback)
const deleteAirBnb = id => axios.delete(`${baseURL}/${id}`).then(airBnbCallback).catch(errCallback)
const changeAirBnbGuests = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(airBnbCallback).catch(errCallback)
function submitHandler(e) {
    e.preventDefault()

    let location = document.querySelector('#location')
    let guests = document.querySelector('input[name="guests"]:checked')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        location: location.value,
        guests: guests.value, 
        imageURL: imageURL.value
    }

    createAirBnb(bodyObj)

    location.value = ''
    guests.checked = false
    imageURL.value = ''
}

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data
            alert(data)
        })
};

function createAirBnbCard(airBnb) {
    const airBnbCard = document.createElement('div')
    airBnbCard.classList.add('airBnb-card')
    console.log(airBnb.imageURL)
    airBnbCard.innerHTML = `<img alt='airbnb cover' src=${airBnb.imageURL} class="airBnb-cover"/>
    <p class="airBnb-location">${airBnb.location}</p>
    <div class="btns-container">
        <button onclick="changeAirBnbGuests(${airBnb.id}, 'minus')">-</button>
        <p class="airBnb-guests">${airBnb.guests} guests</p>
        <button onclick="changeAirBnbGuests(${airBnb.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteAirBnb(${airBnb.id})">delete</button>
    `


    airBnbsContainer.appendChild(airBnbCard)
}
function displayAirBnbs(arr) {
    airBnbsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createAirBnbCard(arr[i])
    }
}

complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener('click', getFortune)
form.addEventListener('submit', submitHandler)


// getAllAirBnbs()