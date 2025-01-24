const axios = require("axios");
const LOCAL_URL = "http://34.41.208.120";
console.log(process.env.SERVER_URL);
const tokenStr = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNjYWZkNGM5LWQxOTUtNGUxYS04ODBhLWNhNTM3ODY1MTZjZiIsInVzZXJfaWQiOjMsInVzZXJuYW1lIjoiYWRtaW5AdHlrZS5haSIsInNlc3Npb25faWQiOiI2NTUzODc3Ni05MmJhLTQ3YmQtODU4Ny1jZDFiNTVkMWVjMGUiLCJyb2xlIjoiQWRtaW4iLCJpc3MiOiJUeWtldmlzaW9uIiwiaXNzdWVkX2F0IjoiMjAyNC0wNS0wNVQxMjoxMjo1NS43MTM3NjY3NjJaIiwiZXhwaXJlZF9hdCI6IjIwMjQtMDUtMDVUMTg6MTI6NTUuNzEzNzY3MjAxWiIsImF1dGhfdHlwZSI6IlRva2VuIn0.xJd82ehxAbQaOBPet1Up1r7tOk933AVr7NXEbK6bPkU"
const requests = [
{
    url: (process.env.SERVER_URL || LOCAL_URL) +  "/api/workspace?mini=true",
    method: "GET",
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  "/api/health",
    method: "GET",
}]
let i = 0;
const startTime = Date.now();
const interval = setInterval(() => sendRequest(), 50)
async function sendRequest() {
    let id, authorId;
    // if (Date.now() - startTime > 1000000) {
    //     clearInterval(interval)
    // }
    for (const req of requests) {
        const request = { ...req, headers: {"Authorization" : `Bearer ${tokenStr}`} };
        try {
            r = await axios(request)
            // s = r.json()
            console.log(++i, r.data.error)
        } catch (e) {
            // console.log(e);
        }
    }   
}
sendRequest()
