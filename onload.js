//
// Точка входа.
//
window.onload = function()
{
	var game1 = new Core('matrix1', 20, 20, 39);
	game1.start();	
    
/*    document.onkeyup =  function(e) 
    {
        var event = e || window.event;
        var keycode = event.keyCode || event.which;
             
        if ((keycode > 36) && (keycode < 41))
			game1.course = keycode;

    } */
	
	$(document).ready (function()
	{
		$('*').live('keyup', function(e){
			var event = e || window.event;
			var keycode = event.keyCode || event.which;
             
			if ((keycode > 36) && (keycode < 41))
				game1.course = keycode;
		})
	});
    
    
}		