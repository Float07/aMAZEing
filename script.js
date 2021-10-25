let maze = document.getElementById("maze");

for (let index = 0; index < 100; index++) {
    let cell = document.createElement("div");
    cell.classList.add("maze_cell");
    maze.appendChild(cell);
}
