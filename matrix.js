//
// ����� �������.
//
function Matrix(containerId, rows, cols)
{
	// id ����������
	this.containerId = '#'+containerId;
	
	// ����� �����
	this.rows = rows;
	
    // ����� ��������
    this.cols = cols;
    
    // ����� �����
    this.points = 0;
    
    var matrix = $(this.containerId)     
    
    
	// �������� �����
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
          
    // ��������� ������ ������ ������� �� �����������.
    this.getCellNumber = function(row, col) 
    {
        return (row - 1) * this.cols + col - 1;
    }
	
	//������� ������ �� �����������
	this.cell = function(row, col)
	{
        var ind = this.getCellNumber(row, col);
		return matrix.find('div').eq(ind);
	}
	
	// �������� �������� ������ � �������� � ������������
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
		
