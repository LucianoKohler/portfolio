console.log('Hello, world!')

let habs = document.getElementsByClassName('element');
let midTitle = document.querySelector('#middle #title')
let midDesc = document.querySelector('#middle #desc')

for(let i = 0; i< habs.length; i++){
    habs[i].addEventListener('mouseover', () =>{
        for(let j = 0; j< habs.length; j++){
            habs[j].style.animationPlayState = 'paused';
        }
        changeDesc(habInfos[i][0])
    })

    habs[i].addEventListener('mouseout', () =>{
        for(let j = 0; j< habs.length; j++){
            habs[j].style.animationPlayState = 'running';
        }
        changeDesc('Minhas habilidades', 'Passe o mouse em cima das minhas capacitações para saber mais sobre')
    })
}

function changeDesc(newTitle, newDesc){
    midTitle.style.color = 'white';
    
    setTimeout(() =>{
        midTitle.innerHTML = newTitle
    }, 200)

    setTimeout(() =>{
        midTitle.style.color = 'black';
    }, 400)
}

let habInfos = [
  //[nome, desc]
    ["HTML",""],
    ["JavaScript",""], 
    ["TypeScript",""], 
    ["C++",""], 
    ["Canva",""], 
    ["Figma",""]
];
