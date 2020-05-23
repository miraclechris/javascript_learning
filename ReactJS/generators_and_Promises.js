require('isomorphic-fetch')

function ajax(endpoint) {
    fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            apiGen.next(data)
        })
        .catch((err) => {
            console.log(`There was an exception calling Ajax ${err}`)
            })
}

function* userRepo(user, repoNumber) {
    let userData = yield ajax(`https://api.github.com/users/${user}`)
    let repos = yield ajax(userData.repos_url)
    console.log(repos[repoNumber].name)
}

let apiGen = userRepo('miraclechris', 0)
apiGen.next()