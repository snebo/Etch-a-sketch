container = document.querySelector(".container")

const rows= 16
const cols= 16
let count = 0

//initilize grid
while(count < (rows*cols)){
    newDiv = document.createElement('div')
    newDiv.classList.add("box")
    newDiv.style.cssText ="flex:1 0 6%; height:6.25%; border:1px solid grey" 
    container.appendChild(newDiv)
    count++
}
const pixels = document.querySelectorAll('.box')
pixels.forEach(pixel => pixel.addEventListener("mouseover", ()=>{
    pixel.style.cssText += "background-color: black"
}))