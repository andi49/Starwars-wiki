
const sithCard = document.querySelector("#sith")



const dataBankUrl = "https://starwars-databank-server.vercel.app/api/v1/characters?page=2&limit=total"

fetch(dataBankUrl)
    .then(res => { return res.json(); })
    .then(json => {
        const sith = json.data.filter(char =>

             char.name.toLowerCase().includes('darth')
            && char.description.toLowerCase().includes('sith')
        );
        console.log(sith)
        renderSith(sith)
    })

    .catch(err => console.error("Det blev fel:", err));


export const renderSith = async (sith) => {
 
    sith.forEach(s => {
          if (s.name === "Anakin Skywalker") return;
        const charDiv = document.createElement('div')
        const charImgEl = document.createElement('img')
        const charNameEl = document.createElement('h1')
        const charDesEl = document.createElement('p')

        const name = s.name
        const description = s.description
        const charImg = s.image

        charImgEl.classList.add('charImg')
        charDiv.classList.add('charDiv')


        charImgEl.src = charImg
        charNameEl.innerText = name
        charDesEl.innerText = `Description: ${description}`


        charDiv.append(charImgEl, charNameEl, charDesEl)
        sithCard.append(charDiv)
    
    });
    
}