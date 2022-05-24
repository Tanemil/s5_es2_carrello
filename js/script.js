let budget = 1000;

let weapon_tool = ['assets/Weapon & Tool/Arrow.png','assets/Weapon & Tool/Axe.png','assets/Weapon & Tool/Bow.png','assets/Weapon & Tool/Emerald Staff.png','assets/Weapon & Tool/Golden Sword.png','assets/Weapon & Tool/Hammer.png','assets/Weapon & Tool/Iron Shield.png','assets/Weapon & Tool/Iron Sword.png','assets/Weapon & Tool/Knife.png','assets/Weapon & Tool/Magic Wand.png','assets/Weapon & Tool/Pickaxe.png','assets/Weapon & Tool/Ruby Staff.png','assets/Weapon & Tool/Sapphire Staff.png','assets/Weapon & Tool/Shovel.png','assets/Weapon & Tool/Silver Sword.png','assets/Weapon & Tool/Topaz Staff.png','assets/Weapon & Tool/Torch.png','assets/Weapon & Tool/Wooden Shield.png','assets/Weapon & Tool/Wooden Staff.png','assets/Weapon & Tool/Wooden Sword.png']

let dizionario_prezzi_card = {
    50 : [() => {return weapon_tool[Math.floor(Math.random()*weapon_tool.length)]},'Titolo 1','descrizione ogg 1'],
    100 : [() => {return weapon_tool[Math.floor(Math.random()*weapon_tool.length)]},'Titolo 2','descrizione ogg 2'],
    80 : [() => {return weapon_tool[Math.floor(Math.random()*weapon_tool.length)]},'Titolo 3','descrizione ogg 3'],
    65 : [() => {return weapon_tool[Math.floor(Math.random()*weapon_tool.length)]},'Titolo 4','descrizione ogg 4'],
    25 : [() => {return weapon_tool[Math.floor(Math.random()*weapon_tool.length)]},'Titolo 5','descrizione ogg 5']
}

function scala_soldi(soldi) {
    if ( budget - soldi >= 0 ){
        budget -= soldi
        mostra_soldi()
    }else{
        alert('hai finito i soldi')
    }
}

function mostra_soldi(){
    document.getElementsByTagName('span')[0].innerHTML = budget
}

function aggiungi_100() {
    budget += 100
    mostra_soldi()
}

function crea_carta( valore_dizionario , dizionario) {
    //creo gli elementi
    const elemento_div = document.createElement('div')
    const elemento_img = document.createElement('img')
    const elemento_titolo = document.createElement('h2')
    const elemento_descrizione = document.createElement('p')
    const elemento_prezzo = document.createElement('p')
    const elemento_bottone_acquista = document.createElement('button')
    //attribuisco agli elementi i loro valori , src , testo etcc....
    elemento_img.src = dizionario[valore_dizionario][0]()  
    elemento_titolo.innerHTML = dizionario[valore_dizionario][1]
    elemento_descrizione.innerHTML = dizionario[valore_dizionario][2]
    elemento_prezzo.innerHTML = 'prezzo: ' + valore_dizionario
    elemento_bottone_acquista.innerHTML = 'Acquista'
    elemento_bottone_acquista.onclick = () => scala_soldi(valore_dizionario)
    //appendo al div principale tutti gli elementi cosi' che' poi ne ho solo uno da appendere alla fine al div nel body
    elemento_div.appendChild(elemento_img)
    elemento_div.appendChild(elemento_titolo)
    elemento_div.appendChild(elemento_descrizione)
    elemento_div.appendChild(elemento_prezzo)
    elemento_div.appendChild(elemento_bottone_acquista)

    document.getElementsByTagName('div')[0].appendChild(elemento_div)
}

for (const key in dizionario_prezzi_card) {
    crea_carta( key , dizionario_prezzi_card)
}

mostra_soldi()








