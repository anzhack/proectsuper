const mazeElement = document.getElementById('maze');
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0 ,0 ,1],
    [1 ,1 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1],
    [1 ,0 ,0 ,0 ,0 ,0 ,2 ,0 ,4 ,5],
    [2 ,2 ,0 ,2 ,0 ,2 ,2 ,0 ,2 ,5],
    [5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5]
];
let playerPosition = { x: 1,y:3 }; // Начальная позиция игрока


// Отрисовка лабиринта
function drawMaze() {
    mazeElement.innerHTML = ''; // Очищаем предыдущий лабиринт


    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
           
            if (maze[y][x] >=  1) {
                cell.classList.add('wall');
            }


            if (x === playerPosition.x && y === playerPosition.y) {
                cell.classList.add('player');
            }


            mazeElement.appendChild(cell);
        }
    }
}


// Движение игрока
function movePlayer(dx,dY) {
    const newX = playerPosition.x + dx;
    const newY = playerPosition.y + dY;


    // Проверяем не столкнется ли игрок со стеной
    if (maze[newY] && maze[newY][newX] === 0) {
        playerPosition.x = newX;
        playerPosition.y = newY;


        drawMaze();
    }
}


// Обработка нажатий клавиш
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp':
            movePlayer(0,-1);
            break;
        case 'ArrowDown':
            movePlayer(0,+1);
            break;
        case 'ArrowLeft':
            movePlayer(-1,0);
            break;
        case 'ArrowRight':
            movePlayer(+1,0);
            break;
    }
});


// Генерация и отрисовка лабиринта при загрузке страницы
drawMaze();

