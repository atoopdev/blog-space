
// fetch is by default a GET request
// can specify method by adding parameter
fetch('https://apis.scrimba.com/jsonplaceholder/posts', {method:"GET"})
.then(response => response.json())
.then(data => {
    console.log(data)
    // grab first 5 posts
    const postsArr = data.slice(0,4)
    console.log(postsArr)
})


// GET - getting data
// POST - adding new data
// PUT - Updating existing data
// DELETE - remove data
