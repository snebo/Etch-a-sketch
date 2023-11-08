container = document.querySelector(".container")

const grid_input = 16
let count = 0
const grid = grid_input*grid_input

//initilize grid
while(count < grid){
    newDiv = document.createElement('div')
    newDiv.classList.add("box")
    newDiv.style.cssText =`flex:1 0 ${(98/(grid/grid_input))}%; height:${100/(grid/grid_input)}%; border:1px solid grey`
    container.appendChild(newDiv)
    count++
}
console.log(count)
const pixels = document.querySelectorAll('.box')
pixels.forEach(pixel => pixel.addEventListener("mouseover", ()=>{
    pixel.style.cssText += "background-color: black"
}))