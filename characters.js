let Character = ''
let menu = document.querySelector('.menu')
let maze_div = document.querySelector('.maze-div')

function choose_character(){
    let characters_block = document.querySelector('.characters')
    characters_block.style.display = "block"
    
    let purple_char1 = document.querySelector('.purple_char1')
    purple_char1.addEventListener('click', function(){
        Character = purple_char1.querySelector('img').getAttribute('src')
        win_maze()
    })
    
    let purple_char2 = document.querySelector('.purple_char2')
    purple_char2.addEventListener('click', function(){
        Character = purple_char2.querySelector('img').getAttribute('src')
        win_maze()
    })
    
    let purple_char3 = document.querySelector('.purple_char3')
    purple_char3.addEventListener('click', function(){
        Character = purple_char3.querySelector('img').getAttribute('src')
        win_maze()
    })

    let purple_char4 = document.querySelector('.purple_char4')
    purple_char4.addEventListener('click', function(){
        Character = purple_char4.querySelector('img').getAttribute('src')
        win_maze()
    })
    
    let green_char1 = document.querySelector('.green_char1')
    green_char1.addEventListener('click', function(){
        Character = green_char1.querySelector('img').getAttribute('src')
        win_maze()
    })
    
    let green_char2 = document.querySelector('.green_char2')
    green_char2.addEventListener('click', function(){
        Character = green_char2.querySelector('img').getAttribute('src')
        win_maze()
    })
    
    let green_char3 = document.querySelector('.green_char3')
    green_char3.addEventListener('click', function(){
        Character = green_char3.querySelector('img').getAttribute('src')
        win_maze()
    })
    
    let green_char4 = document.querySelector('.green_char4')
    green_char4.addEventListener('click', function(){
        Character = green_char4.querySelector('img').getAttribute('src')
        win_maze()
    })
    
    let blue_char1 = document.querySelector('.blue_char1')
    blue_char1.addEventListener('click', function(){
        Character = blue_char1.querySelector('img').getAttribute('src')
        win_maze()
    })

    let blue_char2 = document.querySelector('.blue_char2')
    blue_char2.addEventListener('click', function(){
        Character = blue_char2.querySelector('img').getAttribute('src')
        win_maze()
    })
    
    let blue_char3 = document.querySelector('.blue_char3')
    blue_char3.addEventListener('click', function(){
        Character = blue_char3.querySelector('img').getAttribute('src')
        win_maze()
    })
    
    let blue_char4 = document.querySelector('.blue_char4')
    blue_char4.addEventListener('click', function(){
        Character = blue_char4.querySelector('img').getAttribute('src')
        win_maze()
    })
    
    let yelloy_char1 = document.querySelector('.yelloy_char1')
    yelloy_char1.addEventListener('click', function(){
        Character = yelloy_char1.querySelector('img').getAttribute('src')
        win_maze()
    })
    
    let yelloy_char2 = document.querySelector('.yelloy_char2')
    yelloy_char2.addEventListener('click', function(){
        Character = yelloy_char2.querySelector('img').getAttribute('src')
        win_maze()
    })
    
    let yelloy_char3 = document.querySelector('.yelloy_char3')
    yelloy_char3.addEventListener('click', function(){
        Character = yelloy_char3.querySelector('img').getAttribute('src')
        win_maze()
    })
    
    let yelloy_char4 = document.querySelector('.yelloy_char4')
    yelloy_char4.addEventListener('click', function(){
        Character = yelloy_char4.querySelector('img').getAttribute('src')
        win_maze()
    })
}
function test(){
    let em = document.querySelector('.em')
    em.addEventListener('click', function(e){
        e.preventDefault()
        
    
        window.open('https://www.16personalities.com/ru/test-lichnosti', '_blank')
        choose_character()


        
    })
}

const mazeElement = document.getElementById('maze');
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 1 ,0, 1, 1],
    [1 ,1, 1 ,0 ,1 ,1 ,1 ,0 ,1 ,0, 1, 1],
    [1 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,0 ,0, 1, 1],
    [2 ,0 ,1 ,0 ,1 ,2 ,0 ,1 ,1 ,0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
    [5 ,0 ,0 ,0 ,0 ,0 ,0 ,5 ,0 ,0, 0, 5],
    [5 ,5 ,5 ,5 ,1 ,5 ,5 ,5 ,5 ,5, 5, 5],
];
let playerPosition = { x: 0,y: 6}; // Начальная позиция игрока

function win_maze(){

    // window.open('http://127.0.0.1:5500/proectsuper/laburint.html')
    // console.log('win_maze')
    menu.style.display = 'none'
    maze_div.style.display = 'flex'
    drawMaze()
    

}

// Отрисовка лабиринта
function drawMaze() {
    console.log('drawMaze')

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
                // let player = document.querySelector('.player')
                // console.log(Character)
                cell.style.backgroundImage = `url(${Character})`
                cell.style.backgroundSize = 'contain'
                

                
            }


            mazeElement.appendChild(cell);
        }
    }
    if (playerPosition.x === 11 && playerPosition.y === 3){
        alert('Ура! Ты молодец!')
    }
}


// Движение игрока
function movePlayer(dx,dY) {
    console.log('movePlayer')
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



