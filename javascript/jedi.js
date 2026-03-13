
const JediCard = document.querySelector("#jedi")
console.log(JediCard)

const dataBankUrl = "https://starwars-databank-server.vercel.app/api/v1/characters?page=2&limit=total"

fetch(dataBankUrl)
    .then(res => { return res.json(); })
    .then(json => {
        const jedi = json.data.filter(char =>
            char.description.toLowerCase().includes('jedi master')
            && !char.name.toLowerCase().includes('darth')
            && !char.description.toLowerCase().includes('sith')
            && !char.description.includes('Republic')
            && !char.name.includes('Clone')
            && !char.name.includes('Cato Parasitti')
            && !char.name.includes('Inspector')
            && !char.name.includes('Rig Nema')
            && !char.name.includes('Silman')
            && !char.name.includes('Tera Sinube')
            && !char.name.includes('Zatt')
            && !char.description.toLowerCase().includes('droids ' && 'droid')
        );
        console.log(jedi)
        renderJedi(jedi)
    })

    .catch(err => console.error("Det blev fel:", err));

const renderJedi = async (jedi) => {

    jedi.forEach(j => {
        const charDiv = document.createElement('div')
        const charImgEl = document.createElement('img')
        const charNameEl = document.createElement('h1')
        const charDesEl = document.createElement('p')

        const name = j.name
        const description = j.description
        const charImg = j.image

        charImgEl.classList.add('charImg')
        charDiv.classList.add('charDiv')

        charImgEl.src = charImg
        charNameEl.innerText = name
        charDesEl.innerText = `Description: ${description}`


        charDiv.append(charImgEl, charNameEl, charDesEl)
        JediCard.append(charDiv)

    });
}

