function Snake(matrix, row, col, course)
{
	this.head = [row, col];
	this.body = new Array();
    this.body.push([this.head[0], this.head[1]]);
	this.course = course;
	this.lastCourse = course;
    this.alive = true; 		// живой
    this.ate = false;  		// поел
	var that = this;   		// то = это

	this.create = function()
	{
		matrix.setCell(that.head[0], that.head[1], 'cell on');
	}
	
	this.move = function()
	{	
		if (Math.abs(that.course - that.lastCourse) == 2)
		{
			that.head = ([that.body[0][0], that.body[0][1]]);
			that.body.reverse();
		}
	
		switch(that.course)
		{
            case 39: //'right':
                that.head[1]++;
                break;
            case 37: // 'left':
                that.head[1]--;
                break;
            case 38: // 'up':
                that.head[0]--;
                break;
            case 40: // 'down':
                that.head[0]++;
                break;
		}
		
		if ((that.head[0] < 1) || (that.head[0] > matrix.rows) || (that.head[1] < 1) || (that.head[1] > matrix.cols) || (matrix.getCell(that.head[0], that.head[1], 'cell on'))) {
            that.alive = false; 
            return;
        }		
		
		that.body.push([that.head[0], that.head[1]]);  		
        if (matrix.getCell(that.head[0], that.head[1], 'cell banana')) {
			that.ate = true;
		}
		else
			var tail = that.body.shift();		

		if (tail)
			matrix.setCell(tail[0], tail[1], 'cell');
		matrix.setCell(that.head[0], that.head[1], 'cell on');   
		that.lastCourse = that.course
		 
	}
}