window.onload = (event) =>{buildDivs();};
onresize = (event) => {buildDivs();};

let q = 16;

function buildDivs(){
    const container = document.getElementById('container');
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }

    const size = container.offsetHeight;
    const elSize = (size/q);

    

    for(let i=0;i<q*q;i++){
        const div = document.createElement('div');
        div.classList.add('el');
        container.appendChild(div);
    }

    const cssRule = document.styleSheets[0].cssRules[1];
    cssRule.style.setProperty('width', String(elSize)+'px');
    cssRule.style.setProperty('height', String(elSize)+'px');


}
document.getElementById("button").addEventListener("click", () => {
    q = prompt("Choose a number for the Grid", q);
    buildDivs();
});