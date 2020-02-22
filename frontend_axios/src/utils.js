const axios = require('axios');
const url = 'http://localhost:3000/people'


const getPeopleFetch = () => {
  return fetch(`${url}`)
    .then(response => response.json())
    .then((res) =>  {return res })
}

const createPeopleFetch = (data) => {
  fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
}

const deletePeopleFetch = (id) => {
  fetch(`${url}/people/${id}`, {
  method: 'DELETE',
  })
  .then(res => res.json())
  .then(res => console.log('worked', res))
}


const updatePeopleFetch = (id) => {
  let data = {name: 'Turing'}
  fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
}

const getPeopleAxios = () => {
  const response = axios.get(`${url}`)
  .then(response => {
    return response
  })
}



// let data = {
//   id: 10,
//   name: 'Tatyana Fazlalizadeh',
//   bio: 'is an American artist, activist, and freelance illustrator. She is best known as the creator of the campaign and art exhibition Stop Telling Women to Smile',
//   image_url: 'https://images.squarespace-cdn.com/content/v1/566ca3e51115e0874922e571/1527697769922-9IYXS5CLRRRSNFQI2LPD/ke17ZwdGBToddI8pDm48kBXfl9523PPCMjiJNCtOhKtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx099H1iDMs77VbX2wfrKeigECPMbG3kEu0b-ipHJs1wyNrL1545Wed7woU4xgzO5Q/static1.squarespace.jpg',
//   dob: 'October 12, 1985'
// }

export { getPeopleFetch, deletePeopleFetch, createPeopleFetch, updatePeopleFetch }
