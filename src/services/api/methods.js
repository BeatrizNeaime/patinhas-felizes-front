const POST = (endpoint, body) =>{
  let url = `http://localhost:8080/api/v1/${endpoint}`
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }

  return fetch(url, options)
    .then(response => response.json())
    .catch(error => false)
}

const GET = (endpoint) =>{
  let url = `http://localhost:8080/api/v1/${endpoint}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }

  return fetch(url, options)
    .then(response => response.json())
    .catch(error => false)
}

export {
  POST,
  GET
}