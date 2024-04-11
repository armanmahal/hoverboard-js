let container = document.querySelector(".container");

const colors = ['#00ffff', '#ff6600', '#ff0000', '#c300ff', '0004ff']

// RAINBOW COLORS BELOW...
// const colors = ['#9400D3','#4B0082','#0000FF','#00FF00','#FFFF00','#FF7F00','#FF0000']

for (let i = 0; i < 1000; i++) {
    const square = document.createElement("div");
    square.classList.add('box');

    square.addEventListener("mouseover", () => changecolor(square))

    square.addEventListener("mouseout", function () {

        square.style.backgroundColor = "rgb(19, 22, 43)";
        square.style.boxShadow = "none";
    })

    container.appendChild(square);
}

let i = 0;

function changecolor(element) {
    const x = i % (colors.length);
    i++;

    const color = colors[x];

    element.style.backgroundColor = color;
    element.style.boxShadow = `0px 0px 4px 2px ${color}`
}