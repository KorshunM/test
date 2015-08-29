//
// ядро игры.
//
function Core(containerId, rows, cols, course)
{
	this.containerId = containerId;
	this.rows = rows;
    this.cols = cols;
	this.course = course;
	var that = this; 
	
	this.start = function()
	{
		m1 = new Matrix(this.containerId, this.rows, this.cols);
		m1.create();
		
		var snake = new Snake(m1, 1, 1, this.course);
		snake.create();  
		
		var snakeMoving = setInterval(gameplay, 300);
		
		function gameplay()
		{
			if (snake.alive)
			{
				snake.course = that.course;
				snake.move();
			}
			else{
				clearInterval(snakeMoving); 
//				alert('GAME OVER');		
				var player = prompt(' рнец игры. ¬ведите им€ игрока', '');
				if ((player != null) && (player != '')) {
					$.post("add.php", {name: player, score: m1.points});
					$('#result').load("get.php");
				}
				that.stop();
			}
			if (snake.ate)
			{
				m1.points++;
				$('#matrix1points').text(m1.points);
				m1.setRandomCell('cell banana');
				snake.ate = false;
			}    
		}
    
		m1.setRandomCell('cell banana');	
	}
	
	/*this.stop = function()
	{
		clearInterval(snakeMoving); 
		alert('GAME OVER');			
	}*/
	

    
    
}		