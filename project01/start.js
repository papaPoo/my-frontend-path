(() => {
    function setup() {
        const canvas = document.getElementById('falling-snow-canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        return {
            canvas,
            canvasContext: canvas.getContext('2d'),
            numberOfSnowBalls: 250
        };
    }
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function createSnowBalls(canvas, numberOfSnowBalls) {
        return [...Array(numberOfSnowBalls)].map(() =>{
            return {
                x: random(0, canvas.width),
                y: random(0, canvas.height),
                opacity: random(0.5, 1),
                color: random(0, 255),
                radius: random(2, 4),
                speedX: random(-5,5),
                speedY: random(1, 3)
            };
        });
    }
    function drawSnowBall(canvasContext, snowBall) {
        canvasContext.beginPath();
        canvasContext.arc(
            snowBall.x,
            snowBall.y, 
            4, 
            0, 
            Math.PI * 2
        );
        const colorSet = 255;
        canvasContext.fillStyle = `rgba(${colorSet}, ${colorSet}, ${colorSet}, ${snowBall.opacity})`;
        canvasContext.shadowColor = '#FFFFFF';
        canvasContext.shadowBlur = 10;
        canvasContext.fill();   
    }
    function moveSnowBall(canvas, snowBall) {
        snowBall.x += snowBall.speedX;
        snowBall.y += snowBall.speedY;

        if (snowBall.x > canvas.width){
            snowBall.x = 0;
        } else if (snowBall.x < 0){
            snowBall.x = canvas.width;
        }

        if (snowBall.y > canvas.height){
            snowBall.y = 0;
        }
    }
    function run(){
        const {canvas, canvasContext, numberOfSnowBalls} = setup();
        const snowBalls = createSnowBalls(canvas,numberOfSnowBalls);

        // canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        // snowBalls.forEach((snowBall) => drawSnowBall(canvasContext, snowBall));
        // snowBalls.forEach((snowBall) => moveSnowBall(canvas, snowBall));

        setInterval(() =>{
            canvasContext.clearRect(0, 0, canvas.width, canvas.height);
            snowBalls.forEach((snowBall) => drawSnowBall(canvasContext, snowBall));
            snowBalls.forEach((snowBall) => moveSnowBall(canvas, snowBall));
        }, 50);
        
    }

    run();
})();