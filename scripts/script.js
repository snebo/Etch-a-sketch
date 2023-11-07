container = document.querySelector(".container")

const rows= 16
const cols= 16
let count = 0

while(count < (rows*cols)){
    const newDiv = document.createElement('div')
    container.appendChild(newDiv)
    count++
}