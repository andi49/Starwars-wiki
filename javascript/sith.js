
const sithCard = document.querySelector("#sith")



const dataBankUrl = "https://starwars-databank-server.vercel.app/api/v1/characters?page=2&limit=total"

fetch(dataBankUrl)
    .then(res => { return res.json(); })
    .then(json => {
        const sith = json.data.filter(char =>
            (
                char.name.toLowerCase().includes('darth')
                || char.description.toLowerCase().includes('sith')
                || char.description.toLowerCase().includes('sith lord')
                && !char.description.includes('Clone')
                && !char.name.includes('Admiral Griss')
            )
            && !char.description.includes('Clone')
            && !char.name.includes('Admiral Griss')
            && !char.name.includes('Albrekh')
            && !char.description.includes('Naboo')
            && !char.name.includes('Dex Tiree')
            && !char.name.includes('First Order Raiders')
            && !char.name.includes('General Quinn')
            && !char.name.includes('Jiro')
            && !char.name.includes('Mika Grey')
            && !char.name.includes('Luke Skywalker')
            && !char.name.includes('Ochi of Bestoon')
            && !char.name.includes('Vaneé')
            && !char.name.includes('Veris Hydan')
             && !char.name.includes('Yarael Poof')


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