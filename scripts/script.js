let container = document.querySelector(".container")
let change_grid  = document.querySelector(".change_grid")

let grid_input = 16
let count
let grid

function gridSetup(){
    container.innerHTML=""
    grid = grid_input*grid_input
    count= 0

    while(count < grid){
        newDiv = document.createElement('div')
        newDiv.classList.add("box")
        newDiv.style.cssText =`flex:1 0 ${(100/(grid/grid_input))}%; height:${100/(grid/grid_input)}%; border:1px solid grey`
        container.appendChild(newDiv)
        count++
    }
    pixelShader()
}
function pixelShader(){
    const pixels = document.querySelectorAll('.box')
    pixels.forEach(pixel => pixel.addEventListener("mouseover", ()=>{
        pixel.style.cssText += `background-color: ${randomColor()}`
    }))
}

change_grid.addEventListener("click",()=>{
    let catcher = Number(prompt("Enter a grid size (eg 32, 16,...)"))
    if (typeof catcher == "number" && catcher >1 && catcher<129){
        grid_input = catcher
        gridSetup()
    } 
    else{
        alert("Thats and invalid grid size")
    }
})
function randomColor(){
    let r = Math.floor(Math.random()*257)
    let g = Math.floor(Math.random()*257)
    let b = Math.floor(Math.random()*257)
    return ["rgb("+r+","+g+","+b+")"].join()
}

gridSetup()
