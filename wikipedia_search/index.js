let output = [];
let idind = 1;
let language = "";
let ende = "";
//voeg een listner toe om te wisselen tussen dark mode en light mode deze roept de functie switchColorScheme op
document.querySelector("#darkMode").addEventListener("click", () => { switchColorScheme() });

//voeg listner toe aan knop om alle input te verwijderen deze roept de functie reset op
document.querySelector("#verwijderKnop").addEventListener("click", () => { reset(); });

//voeg listner toe aan knop om wikipedia te openen deze opent een wikipediapagina met als taal de taal in het inputveld voor language
document.querySelector("#openWiki").addEventListener("click", () => {
    window.open("https://"+getOrDef("#toevoegInputVeldLang","en")+".wikipedia.org/", '_blank').focus();
});

//voeg de listner toe aan de knop om paden toe te voegen
document.querySelector("#toevoegKnop").addEventListener("click", () => {
    // haal de waarden van de inputvelden op zijn deze leeg geef ze dan een defaultwaarde
    const lang = getOrDef("#toevoegInputVeldLang","en");
    const start = getOrDef("#toevoegInputVeldStart","Special:Random");
    const end = getOrDef("#toevoegInputVeldEnd","Philosophy");
    // controleer of de input taal of eindpunt niet is veranderd
    checkChangeLang(lang);
    checkChangeEnd(end);
    // roep de functie voeg toe op deze vraagt een pad op aan python en gaat deze dan toevoegen aan het huidige pad en displayen
    voegToe(lang,start,end);
});

function switchColorScheme(){
    // switch tussen de color modes
    if(document.getElementById('darkMode').checked){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}
function getOrDef(id,def){
    // vraag de waarde op van een inputveld is deze leeg geef dan de defaultwaarde terug
    let val = document.querySelector(id).value;
    if(val == "") val = def;
    return val;
}
function voegToe(lang,start,end) {
    // disable de toevoegknop
    document.getElementById('toevoegKnop').disabled = true;
    // haal de locatie op om de paden te displayen
    const items = document.querySelectorAll("#items li");
    // "start" de timer
    let time1 = performance.now();
    // plaats de waarde van waarschuwing op false (nog geen waarschuwing gegeven) nodig om te controleren of de tijd getoond mag worden
    let waarschuwing = false;
    // vraag het programme voeg_toe.py op met verkregen argumenten
    fetch(`cgi-bin/voeg_toe.py?lang=${lang}&start=${start}&end=${end}`)
        // creer een json uit het promise object dat de fetch heeft gereturned
        .then(antwoord => antwoord.json())
        .then(data => {
            if(data["error"] == undefined){  // voer onderstaande code uit als er geen error is gegeven in het python script
                if(output.length == 0){
                    addRoot(data["path"].reverse());  // voeg de stam van de boom toe
                }else{
                    addBranch(data["path"].reverse());  // voeg een tak toe aan de boom
                }
                document.querySelector("#items").innerHTML = makeHtml(list_to_tree(output));  // toon deze boom op de pagina
            }else{
                // er is een waarschuwing gegeven alert deze en plaats de waarschuwing flag op true
                waarschuwing = true;
                alert(data["error"])
            }
        }).then(
            () => {
                // maak de toevoegknop terug bruikbaar
                document.getElementById('toevoegKnop').disabled = false
                // "stop" de timer
                let time2 = performance.now()
                // als er geen waarschuwing getoond is toon dan de verstreken tijd
                if(!waarschuwing) {
                    document.querySelector("#items").innerHTML = `<h3>Your search took ${((time2 - time1)/1000).toFixed(2)} seconds</h3>\n` + document.querySelector("#items").innerHTML;
                }
            }
        ).catch(error => {
            // catch de errors die nog niet opgevangen zijn (normaal niet nodig maar enkel voor de zekerheid)
            alert('There has been a problem with your fetch operation:', error);
        });
}
// als de taal niet de laatst ingegeven taal is reset
function checkChangeLang(lang){
    if (language != lang){
        language = lang;
        reset();
    }
}
// als de eindpagina niet de laatst ingegeven eindpagina is reset
function checkChangeEnd(eind){
    if (ende != eind){
        ende = eind;
        reset();
    }
}
// zet alle variablen terug op hun startwaarde en verwijder alle gedisplayde html ellementen
function reset(){
    output = [];
    idind = 1;
    document.querySelector("#items").innerHTML = "";
}
function addRoot(arr){
    arr = arr.map(e => decodeURIComponent(e).replace(/_/g, " "));  // haal de decoded karakters uit de url terug op
    for (let e = 0; e<arr.length ; e++){
        output.push(         // voeg voor elk ellement in het pad een node toe aan de boom
            {
                id: idind,
                parentId: 0,
                node: arr[e],
                depth :e
            }
        );
        idind++;
    }
}
function addBranch(arr) {
    arr = arr.map(e => decodeURIComponent(e).replace(/_/g, " "));   // haal de decoded karakters uit de url terug op
    for(let i = 0 ;i < arr.length ; i++){
        if(index(output,arr[i]) == -1) {
            output.push(   // voeg voor elk ellement in het pad dat nog niet in de boom zit een node toe aan de boom
                {
                    id: idind,
                    parentId: output[index(output,arr[i-1])].id,
                    node: arr[i],
                    depth : output[index(output,arr[i-1])].depth+1
                }
            );
            idind++;
        }
    }
}

function index (arr,ell){  // zoek de index op van een node in de boom
    let index = 0;
    for(let e of arr){
        if (e.node == ell){
            return index;
        }
        index++;
    }
    return -1;
}

function list_to_tree(list) { // function based on https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript
  var map = {}, node, roots = [], i;

  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentId !== 0) {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

function makeHtml(tree){ // recursieve functie om de html code te genereren
    let html = "";
    if(isIterable(tree)) {  // als je over de ellementen van de tree kan ittereren
        for (let e of tree) {
            if(e.depth >= 1){
                html += `<li>${"....".repeat(e.depth-1)} (${e.depth}) ${e.node}</li>\n`  // voeg een lijn toe met een page niet de endpage (diepte > 0)
            }else{
                html += `<li>${e.node}</li>\n`  // voeg een lijn toe met een page gelijk aan de endpage (diepte == 0)
            }
            if(e.children.length !== 0){
                html += makeHtml(e.children);  // roep deze functie ook op voor alle kinderen van deze node
            }
        }
    }
    return html
}
// check of er over de ellementen van een obj kan gelopen worden
function isIterable(obj) {
    if (obj == null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}
