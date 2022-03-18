
const htmlForm = document.getElementById("blog-post-creator")

let postsArray = []

// ------------------------- renderPosts() ---------------------

function renderPosts(){
    let postsArrHTML =""
  if(postsArray){
    for(let post of postsArray){
         postsArrHTML +=`
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr/>
        `
    }
    // output to webpage
    document.getElementById("blog-posts-container").innerHTML = postsArrHTML
  }
}  

// ------------ pull filler blog post data -------------

// fetch is by default a GET request
// can specify method by adding parameter
fetch('https://apis.scrimba.com/jsonplaceholder/posts', {method:"GET"})
.then(response => response.json())
.then(data => {
    console.log(data)
    // grab first 5 posts
    postsArray = data.slice(0,4)
    console.log("postsArray post data slice: ", postsArray)
    renderPosts()
})

let blogData = {}

// --------- grab submitted form data and post to web page ------------

htmlForm.addEventListener("submit", event=>{
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
    // add new post data object to beginning of posts array
    postsArray.unshift(blogData)
    renderPosts()
    // clear form
    htmlForm.reset()
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

// ------------------------------------------------------------------------


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

// REST - a design pattern to provide a standard way for clients and servers to communicate

// test grabbing comments off of blog postID:2
// fetch("https://apis.scrimba.com/jsonplaceholder/posts/2/comments")
// .then((response) =>response.json())
// .then((json) => console.log("Blog comments: ", json))

// query strings - a way to filter results
// ?xyz=abc
// baseurl https://mikesbikes.com/api/bikes?type=mountain
// ?xyz=abc&123=456
// baseurl https://mikesbikes.com/api/bikes?type=mountain&brand=trek