//
// Класс матрицы.
//
function Matrix(containerId, rows, cols)
{
	// id контейнера
	this.containerId = '#'+containerId;
	
	// число строк
	this.rows = rows;
	
    // число столбцов
    this.cols = cols;
    
    // число очков
    this.points = 0;
    
    var matrix = $(this.containerId)     
    
    
	// создание сетки
    this.create = function()
    {
        var n = this.rows * this.cols;          
        matrix.text = '';                    
        for (var i = 0; i < n; i++)
			matrix.append('<div class="cell" />');
/*        {
            var div = document.createElement('div');
            div.className = 'cell';
            matrix.append(div);
        }  */
    }  
          
    // получение номера ¤чейки матрицы по координатам.
    this.getCellNumber = function(row, col) 
    {
        return (row - 1) * this.cols + col - 1;
    }
	
	//олучить ¤чейку по координатам
	this.cell = function(row, col)
	{
        var ind = this.getCellNumber(row, col);
		return matrix.find('div').eq(ind);
	}
	
	// получить значение ¤чейки и сравнить с предложенным
	this.getCell = function(row, col, className)
	{  
		var cell = this.cell(row, col);
//        return cell.attr('class') == className; 
	    return cell.hasClass(className); 
	}
	
    this.setCell = function(row, col, className)
    {
		var cell = this.cell(row, col);   
 //       return cell.removeClass().addClass(className);		
          return cell.attr('class', className);		
    }        
    
    this.setRandomCell = function(className)
    {   
        var randCol = Math.round(1 + Math.random() * (this.cols - 1)); 
        var randRow = Math.round(1 + Math.random() * (this.rows - 1)); 
		if (this.getCell(randRow, randCol, 'cell'))
			this.setCell(randRow, randCol, className);
		else
			this.setRandomCell(className);         
    }       
}
		
