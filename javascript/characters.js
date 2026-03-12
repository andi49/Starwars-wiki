const akababUrl = "https://raw.githubusercontent.com/akabab/starwars-api/master/api/all.json";
const dataBankUrl = "https://starwars-databank-server.vercel.app/api/v1/characters?page=2&limit=total"
const jediCard = document.querySelector(".shell-card")


 async function fetchAndCombineSWData() {

    //  fetch the data paralell with eachother for faster loading
    const [akababRes, dataBankRes] = await Promise.all([
        fetch(akababUrl).then(res => res.json()),
        fetch(dataBankUrl).then(res => res.json())

    ])

    const combineData = akababRes.map(char => {
        const dataBankCharacters = dataBankRes.data

        const matchNames = dataBankCharacters.find(dbChar => dbChar.name === char.name)

        const newData = {
            name: char.name,
            image: char.image,
            affiliations: char.affiliations,
            description: matchNames ? matchNames.description : "No description found"
        }

        return newData
    })
    console.log('Combined data:', combineData)

    const jedi = combineData.filter(char => char.affiliations?.includes("Jedi Order"));
    console.log("Hittade jedi:", jedi)
    renderJedi(jedi)

    const sith = combineData.filter(char => char.affiliations?.includes("Sith"));
    console.log("Hittade sith:", sith)

}

const renderJedi = async (jedi) => {
   
    jedi.forEach(j => {
        const jediDiv = document.createElement('div')
        const charImgEl = document.createElement('img')
        const charNameEl = document.createElement('h1')
        const charDesEl = document.createElement('p')

        const name = j.name
        const description = j.description
        const charImg = j.image

        charImgEl.classList.add('charImg')
        jediDiv.classList.add('JediDiv')

        charImgEl.src = charImg
        charNameEl.innerText = name
        charDesEl.innerText = `Description: ${description}`


        jediDiv.append(charImgEl, charNameEl, charDesEl)
        jediCard.append(jediDiv)

    });
}

fetchAndCombineSWData()