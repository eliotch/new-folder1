fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        const users = json.map(users =>{
            return `
            <div id="userinfo">
                <h2> ${users.id}<h2>
                <p> ${users.name}</p>
            </div>
            `
        })
        document.body.innerHTML = users.join(" ")
      })

