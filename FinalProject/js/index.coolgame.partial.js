let mainClick = document.getElementById("restartButton");
    let blockSize = 25;
    let total_row = 20; 
    let total_col = 25; 
    let board;
    let context;
    
    let snakeX = blockSize * 5;
    let snakeY = blockSize * 5;
    
    let speedX = 0; 
    let speedY = 0; 
    
    let snakeBody = [];
    
    let foodX;
    let foodY;
    let foodImg = new Image();
    foodImg.src = './img/Graphics/apple.png'; 
    
    let headUp = new Image();
    headUp.src = './img/Graphics/head_up.png';
    let headDown = new Image();
    headDown.src = './img/Graphics/head_down.png';
    let headLeft = new Image();
    headLeft.src = './img/Graphics/head_left.png';
    let headRight = new Image();
    headRight.src = './img/Graphics/head_right.png';
    
    
    let gameOver = false;
    
    
        // Set board height and width
        board = document.getElementById("board");
        board.height = total_row * blockSize;
        board.width = total_col * blockSize;
        context = board.getContext("2d");
    
        placeFood();
        document.addEventListener("keyup", changeDirection); 
        setInterval(update, 1500 / 10);
   
    
    function update() {
        if (gameOver) {
            document.getElementById("gameOverOverlay").style.display = "flex";
            return;
        }
    
        for (let row = 0; row < total_row; row++) {
            for (let col = 0; col < total_col; col++) {
                if ((row + col) % 2 == 0) {
                    context.fillStyle = "#32ab18";
                } else {
                    context.fillStyle = "#31b514";
                }
                context.fillRect(col * blockSize, row * blockSize, blockSize, blockSize);
            }
        }
    
        // Draw the food image
        context.drawImage(foodImg, foodX, foodY, blockSize, blockSize);
    
        if (snakeX == foodX && snakeY == foodY) {
            snakeBody.push([foodX, foodY]);
            placeFood();
        }
    
        for (let i = snakeBody.length - 1; i > 0; i--) {
            snakeBody[i] = snakeBody[i - 1];
        }
        if (snakeBody.length) {
            snakeBody[0] = [snakeX, snakeY];
        }
    
        snakeX += speedX * blockSize; 
        snakeY += speedY * blockSize; 
    
        if (speedX == 1) {
            context.drawImage(headRight, snakeX, snakeY, blockSize, blockSize);
        } else if (speedX == -1) {
            context.drawImage(headLeft, snakeX, snakeY, blockSize, blockSize);
        } else if (speedY == 1) {
            context.drawImage(headDown, snakeX, snakeY, blockSize, blockSize);
        } else if (speedY == -1) {
            context.drawImage(headUp, snakeX, snakeY, blockSize, blockSize);
        } else {
            context.fillStyle = "#607cfc"; 
            context.fillRect(snakeX, snakeY, blockSize, blockSize);
        }
    
    
        for (let i = 0; i < snakeBody.length; i++) {
            context.fillStyle = "#607cfc";
            context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
        }
    
        if (snakeX < 0 
            || snakeX >= total_col * blockSize 
            || snakeY < 0 
            || snakeY >= total_row * blockSize) { 
            
            gameOver = true;
        }
    
        for (let i = 0; i < snakeBody.length; i++) {
            if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) { 
                
                gameOver = true;
            }
        }
        
        if (gameOver) {
            document.getElementById("gameOverOverlay").style.display = "flex";
            alert("Game Over");
        }
    }
    
    function changeDirection(e) {
        if (e.code == "ArrowUp" && speedY != 1) { 
            speedX = 0;
            speedY = -1;
        }
        else if (e.code == "ArrowDown" && speedY != -1) {
            speedX = 0;
            speedY = 1;
        }
        else if (e.code == "ArrowLeft" && speedX != 1) {
            speedX = -1;
            speedY = 0;
        }
        else if (e.code == "ArrowRight" && speedX != -1) { 
            speedX = 1;
            speedY = 0;
        }
    }
    
    function placeFood() {
        foodX = Math.floor(Math.random() * total_col) * blockSize; 
        
        foodY = Math.floor(Math.random() * total_row) * blockSize; 
    }
    
    function restartGame() {
        gameOver = false;
        snakeX = blockSize * 5;
        snakeY = blockSize * 5;
        speedX = 0;
        speedY = 0;
        snakeBody = [];
        placeFood();
        document.getElementById("gameOverOverlay").style.display = "none";
    }

mainClick.addEventListener("click", function(){
restartGame();
});
