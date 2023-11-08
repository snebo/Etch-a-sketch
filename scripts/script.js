let container = document.querySelector(".container")
let change_grid  = document.querySelector(".change_grid")

let grid_input = 16
let count
const grid = grid_input*grid_input

function gridSetup(){
    container.innerHTML=""
    count= 0

    while(count < grid){
        newDiv = document.createElement('div')
        newDiv.classList.add("box")
        newDiv.style.cssText =`flex:1 0 ${(98/(grid/grid_input))}%; height:${100/(grid/grid_input)}%; border:1px solid grey`
        container.appendChild(newDiv)
        count++
    }
}
gridSetup()

change_grid.addEventListener("click",()=>{
    let catcher = Number(prompt("Enter a grid size (eg 32, 16,...)"))
    console.log(typeof catcher)
    if (typeof catcher == "number"){
        grid_input = catcher
        gridSetup()
    } 
})

console.log(count)
const pixels = document.querySelectorAll('.box')
pixels.forEach(pixel => pixel.addEventListener("mouseover", ()=>{
    pixel.style.cssText += "background-color: black"
}))