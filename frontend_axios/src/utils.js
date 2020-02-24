const axios = require('axios');
const url = 'http://localhost:3000/people'


const getPeopleFetch = () => {
  return fetch(`${url}`)
  .then( response => response.json())
  .then(data => data)

}

const getPeopleAxios = async () => {
  try {
    let response = await axios(`${url}`)
    return response.data
  } catch(error) {
    console.error(error);
  }
}

const createPersonAxios = async (data) => {
  try {
    let response = await axios.post(`${url}`, data)
    console.log(response);
  } catch(e) {
      console.error(e);
  }
}

const deletePersonAxios = async (id) => {
  try {
    let response = await axios.delete(`${url}/${id}`)
    console.log(response);
  } catch(e) {
    console.error(e);
  }
}

const updatePersonAxios = async (id, newData) => {
  try {
    let response = await axios.put(`${url}/${id}`, newData)
    console.log(response);
  } catch(e) {
    console.error(e);
  }
}

let data = {
  id: 10,
  name: 'Tatyana Fazlalizadeh',
  bio: 'is an American artist, activist, and freelance illustrator. She is best known as the creator of the campaign and art exhibition Stop Telling Women to Smile',
  image_url: 'https://images.squarespace-cdn.com/content/v1/566ca3e51115e0874922e571/1527697769922-9IYXS5CLRRRSNFQI2LPD/ke17ZwdGBToddI8pDm48kBXfl9523PPCMjiJNCtOhKtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx099H1iDMs77VbX2wfrKeigECPMbG3kEu0b-ipHJs1wyNrL1545Wed7woU4xgzO5Q/static1.squarespace.jpg',
  dob: 'October 12, 1985'
}


let updatedInfo = {
  image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCUOIs4boO9Ex0asrihR8MRX1h_O90BkUkBlTAUDdRMiVhM4L9'
}
// createPersonAxios(data)
// deletePersonAxios(13)
// updatePersonAxios(11, updatedInfo)

export { getPeopleFetch, getPeopleAxios}
