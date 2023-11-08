container = document.querySelector(".container")

const rows= 16
const cols= 16
let count = 0

while(count < (rows*cols)){
    const newDiv = document.createElement('div')
    newDiv.classList.add("box")
    // newDiv.style.cssText ="flex:1 0 6.25%; height:100%; border:1px solid black;" // use this to calculate grid size change
    container.appendChild(newDiv)
    count++
}