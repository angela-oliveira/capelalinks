// const member = document.querySelector('.member')
const team = document.querySelector('.team')

const teamList = [
    {
        id: "berg",
        name: "Lindemberg Travassos",
        function: "Designer Gráfico",
        file: "berg.png",
        about: "Texto",
        instagram: "https://www.instagram.com/lindemberg.travassos/",
        whatsapp: "https://api.whatsapp.com/send?phone=558399535273&text=Salve%20Maria!%20"
    },
    {
        id: "larissa",
        name: "Larissa Travassos",
        function: "Fotógrafa, Redatora, Social Média",
        file: "larissa.png",
        about: "Texto",
        instagram: "https://www.instagram.com/larissab.travassos/",
        whatsapp: "https://api.whatsapp.com/send?phone=558399535273&text=Salve%20Maria!%20"
    },
    {
        id: "angela",
        name: "Ângela Oliveira",
        function: "Fotógrafa, Web Designer",
        file: "angela.png",
        about: "Texto",
        instagram: "https://www.instagram.com/angelaoliveira.ux/",
        whatsapp: "https://api.whatsapp.com/send?phone=558399535273&text=Salve%20Maria!%20"
    },
    {
        id: "rodolfo",
        name: "Rodolfo Felizardo",
        function: "Administrador Financeiro",
        file: "rodolfo.png",
        about: "Texto",
        instagram: "https://www.instagram.com/rodolfoalvesfelizardo/",
        whatsapp: "https://api.whatsapp.com/send?phone=558399535273&text=Salve%20Maria!%20"
    }
]
function lista(person){
    team.innerHTML = ''
    const view = person.map((e) => mountCard(e)).join('')
    team.innerHTML = `
        <h1>
        <button onclick="window.location.href='index.html'">
            <i class="fas fa-arrow-left"></i>
        </button>Equipe Capela!</h1>
        <ul>
            ${view}
        </ul>`

}
function mountCard(person) {
    const card = `
        <li>
            <div onclick="member('${person.id}')" class="card-team">
                <div><img class="team-photo" src="asserts/${person.file}" alt=""></div>
                <div class="team-name">
                    <h2>${person.name}</h2>
                    <p>${person.function}</p>
                </div>
            </div>
            <hr>
        </li>`
    return card
}
lista(teamList)

function member(name) {
    
    const data = teamList.filter(e => e.id == name)
    team.innerHTML = `
    <button onclick="lista(teamList)">
        <i class="fas fa-arrow-left"></i>
    </button>
    
    <div class="grid-member">
        <div class="photo-member">
                <img class="logo-img" src="asserts/${data[0].id}.png" alt="">
                <p class="insta-capela"${data[0].name}</p>
                <div id="text">${data[0].function}</div>
                <div class="social">
                    <a target="_blank" class="p-link" href="${data[0].instagram}">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a target="_blank" class="p-link" href="https://api.whatsapp.com/send?phone=558399535273&text=Salve%20Maria!%20">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
        </div>
        <p>Sobre:</p>
        <p>${data[0].about}</p>
    </div>`
}
