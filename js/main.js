let topCard = 1;
let facingUp = true;

function flipCard(n) {
    if (topCard === n) return;

    // Replace the contents of the current back-face with the contents
    // of the element that should rotate into view.
    let curBackFace = document.querySelector('.' + (facingUp ? 'face2' : 'face1'));
    let nextContent = document.querySelector('.store li:nth-child(' + n + ')').innerHTML; 
    console.log(nextContent)
    curBackFace.innerHTML=nextContent;

    // Rotate the content
    document.querySelector('.card').classList.toggle('flipped');
    topCard = n;
    facingUp = !facingUp;
}


document.querySelector('#flip1').addEventListener('click', function(){ flipCard(1);
console.log("TEST") });
document.querySelector('#flip2').addEventListener('click', function(){ flipCard(2);
console.log(Element) });
document.querySelector('#flip3').addEventListener('click', function(){ flipCard(3); });
document.querySelector('#flip4').addEventListener('click', function(){ flipCard(4); });


window.addEventListener("DOMContentLoaded",()=>{
    let frontFace = document.querySelector('.face1');
    let frontContent = document.querySelector('.store li:first-child').innerHTML; 
    frontFace.innerHTML=frontContent;
})


