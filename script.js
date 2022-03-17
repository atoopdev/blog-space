// ------------ pull filler blog post data -------------

// fetch is by default a GET request
// can specify method by adding parameter
fetch('https://apis.scrimba.com/jsonplaceholder/posts', {method:"GET"})
.then(response => response.json())
.then(data => {
    console.log(data)
    // grab first 5 posts
    const postsArr = data.slice(0,4)
    console.log(postsArr)
    let postsArrHTML =""
    for(let post of postsArr){
        postsArrHTML +=`
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr/>
        `
    }
    console.log(postsArrHTML)
    // output to webpage
    document.getElementById("blog-posts-container").innerHTML = postsArrHTML
})

let blogData = {}

// ------------------ grab submitted form data ------------------------

document.getElementById("blog-post-creator").addEventListener("submit", event=>{
    event.preventDefault();
    console.log("submit")
    const ourFormData = new FormData(event.target)
    const blogTitle = ourFormData.get("blogTitle")
    const blogBody = ourFormData.get("postBody")
    blogData ={
        title: blogTitle,
        body: blogBody
    }
    console.log("BlogData: ", blogData)
})

// ----------------POST Blog Data from Form Submit -----------------

fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    // required so server knows how to parse request
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(blogData)
})
.then(response => response.json())
.then(data => {
    // will return what you have created as confirmation provided you have included header: content type plus an id database number
    console.log("Posted blog data:", data)})




// GET - getting data
// POST - adding new data
// PUT - Updating existing data
// DELETE - remove data

// POST and PUT requests send BODY (data you want to send to server)
// must first turn to JSON
// headers - extra meta info about outgoing request
    // auth, body, info, client info, etc

// const newPostData = {
//     title: "Testing New To-Do Title",
//     completed: false
// }
// // create a todo list item via POST
// fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
//     method: "POST",
//     // required so server knows how to parse request
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body:JSON.stringify(newPostData)
// })
// .then(response => response.json())
// .then(data => {
//     // will return what you have created as confirmation provided you have included header: content type plus an id database number
//     console.log("Return data:", data)})

    