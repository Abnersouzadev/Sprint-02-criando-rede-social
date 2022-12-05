let listaPosts = document.querySelector("ul")
let post = document.querySelector("li")

for(let i = 0; i < posts.length; i++){

    let li = document.createElement("li")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")
    let botao = document.createElement("button")

    h2.innerText = posts[i].title
    p.innerText = posts[i].text
    botao.innerText = "Abrir Post"

    li.appendChild(h2)
    li.appendChild(p)
    li.appendChild(botao)
    listaPosts.appendChild(li)
    
}
