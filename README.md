# Axios-Lecture

## How to  lecture with Annie 🖖🏾

- Falling Asleep
- Coding along
- Asking Questions
- Parking Lot

## By the end of this lecture you will be able to:
 - Refactor a fetch call to use axios instead
 - Use async and await
 - Explain why we do not need the .JSON when using Axios
 - CRUD using axios
 - Use try and catch

## Lecture Structure

### PART ONE

1. Fetch 🤜🏾 vs 🤛🏾 Axios
    - What are the differences and similarities?

2. Async and Await

3. Organize your fetches in a different file

4. CRUD with Axios (using try and catch)


### PART TWO

 [YOU TRY!!!](https://github.com/luanesouza/fantastic-people)


#### HINTS
 -- hints for delete go here --


 -- hints for update go here --


## Extra Resources


[Console.error vs Console.log](https://developer.mozilla.org/en-US/docs/Web/API/Console/error)

[Deep into Axios - Advanced](https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/)







<p style='center'> --------- FETCH CRUD CHEAT SHEET ------------- </p>

`const createPeopleFetch = (data) => {
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
}`

`const deletePeopleFetch = (id) => {
  fetch(`${url}/people/${id}`, {
  method: 'DELETE',
  })
  .then(res => res.json())
  .then(res => console.log('worked', res))
}`


`const updatePeopleFetch = (id) => {
  let data = {}
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
}`

------------ WITH HEADERS ---------------

`const createPersonAxios = async (data) => {
  try {
    let response = await axios.post(`${url}`,
      data,
      {
        headers: {
        'Content-Type': 'application/json',
      }
    })
    console.log(response)

  } catch(e){
    console.error(e.message);
  }
}`


`let data = {

  id: 10,
  name: 'Tatyana Fazlalizadeh',
  bio: 'is an American artist, activist, and freelance illustrator. She is best known as the creator of the campaign and art exhibition Stop Telling Women to Smile',
  image_url: 'https://images.squarespace-cdn.com/content/v1/566ca3e51115e0874922e571/1527697769922-9IYXS5CLRRRSNFQI2LPD/ke17ZwdGBToddI8pDm48kBXfl9523PPCMjiJNCtOhKtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx099H1iDMs77VbX2wfrKeigECPMbG3kEu0b-ipHJs1wyNrL1545Wed7woU4xgzO5Q/static1.squarespace.jpg',
  dob: 'October 12, 1985'
}`
