const axios = require("axios");
const LOCAL_URL = "http://localhost:8081";
console.log(process.env.SERVER_URL);
const requests = [
{
    url: (process.env.SERVER_URL || LOCAL_URL) +  "/api/tutorials/authors",
    method: "POST",
    data: {
        title: "10 days of JS",
        description: "10 days of JS description"
    }
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  "/api/tutorials",
    method: "POST",
    data: {
        title: "10 days of JS",
        description: "10 days of JS description"
    }
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  "/api/tutorials",
    method: "GET"
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  `/api/tutorials/:id`,
    method: "PUT",
    data: {
        title: "10 days of JS",
        published: "true"
    }
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  `/api/tutorials/:id`  ,
    method: "GET"
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  `/api/tutorials/published`,
    method: "GET"
},{
    url: (process.env.SERVER_URL || LOCAL_URL) +  "/api/tutorials/authors",
    method: "POST",
    data: {
        title: "10 days of JS",
        description: "10 days of JS description"
    }
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  "/api/tutorials",
    method: "POST",
    data: {
        title: "10 days of JS",
        description: "10 days of JS description"
    }
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  "/api/tutorials",
    method: "GET"
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  `/api/tutorials/:id`,
    method: "PUT",
    data: {
        title: "10 days of JS",
        published: "true"
    }
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  `/api/tutorials/:id`  ,
    method: "GET"
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  `/api/tutorials/published`,
    method: "GET"
},{
    url: (process.env.SERVER_URL || LOCAL_URL) +  "/api/tutorials/authors",
    method: "POST",
    data: {
        title: "10 days of JS",
        description: "10 days of JS description"
    }
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  "/api/tutorials",
    method: "POST",
    data: {
        title: "10 days of JS",
        description: "10 days of JS description"
    }
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  "/api/tutorials",
    method: "GET"
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  `/api/tutorials/:id`,
    method: "PUT",
    data: {
        title: "10 days of JS",
        published: "true"
    }
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  `/api/tutorials/:id`  ,
    method: "GET"
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  `/api/tutorials/published`,
    method: "GET"
},{
    url: (process.env.SERVER_URL || LOCAL_URL) +  "/api/tutorials/authors",
    method: "POST",
    data: {
        title: "10 days of JS",
        description: "10 days of JS description"
    }
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  "/api/tutorials",
    method: "POST",
    data: {
        title: "10 days of JS",
        description: "10 days of JS description"
    }
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  "/api/tutorials",
    method: "GET"
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  `/api/tutorials/:id`,
    method: "PUT",
    data: {
        title: "10 days of JS",
        published: "true"
    }
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  `/api/tutorials/:id`  ,
    method: "GET"
}, {
    url: (process.env.SERVER_URL || LOCAL_URL) +  `/api/tutorials/published`,
    method: "GET"
}]
let i = 0;
const startTime = Date.now();
const interval = setInterval(() => sendRequest(), 2000)
async function sendRequest() {
    let id, authorId;
    // if (Date.now() - startTime > 1000000) {
    //     clearInterval(interval)
    // }
    for (const req of requests) {
        const request = { ...req };
        if (request.url.includes(":id")) {
            request.url = request.url.replace(":id", id)
        }
        if (request.method === "POST" && request.url === (process.env.SERVER_URL || LOCAL_URL) +  "/api/tutorials") {
            request.data.authorId = authorId;
        }
        try {
            r = await axios(request)
            if (request.method === "POST" && request.url === (process.env.SERVER_URL || LOCAL_URL) +  "/api/tutorials") {
                id = r.data.id;
            }
            if (request.method === "POST" && request.url === (process.env.SERVER_URL || LOCAL_URL) +  "/api/tutorials/authors") {
                authorId = r.data.id;
            }
            console.log(++i)
        } catch (e) {
            console.log(e);
        }
    }   
}
sendRequest()
