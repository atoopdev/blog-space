
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

document.getElementById("blog-post-creator").addEventListener("submit", event=>{
    event.preventDefault();
    console.log("submit")
    const ourFormData = new FormData(event.target)
    const blogTitle = ourFormData.get("blogTitle")
    const blogBody = ourFormData.get("postBody")
    const blogData ={
        title: blogTitle,
        body: blogBody
    }
    console.log(blogData)
})
// GET - getting data
// POST - adding new data
// PUT - Updating existing data
// DELETE - remove data
