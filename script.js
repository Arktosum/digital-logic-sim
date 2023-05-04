const chips = {}
const container = document.querySelector('#container');

function addChip(){
    chips[Date.now()] = {
        pos : {x:0,y:0}
    }
    renderChips();
}
addChip()
renderChips();
function renderChips(){
    console.log(chips);
    container.innerHTML=``
    for(let chipId in chips){
        let chip = chips[chipId]
        
        let element = document.createElement('div')
        element.classList.add('chip');
        element.style.top = `${chip.pos.y}px`;
        element.style.left = `${chip.pos.x}px`;
        element.draggable = true
        element.addEventListener('drag',(e)=>{
            console.log(e);
            chips[chipId].pos.x = e.screenX
            chips[chipId].pos.y = e.screenY
            renderChips();
        })
        container.appendChild(element);
    }
}
