window.addEventListener('load', eventWindowLoaded, false);  
    function eventWindowLoaded() {
        canvasApp();
    }

    function canvasSupport () {
        return Modernizr.canvas;
    }
    function canvasApp()
{
        if (!canvasSupport()) {
            return;
        }
        else {
            var theCanvas = document.getElementById('canvas');
            var context = theCanvas.getContext('2d');
        }
        initGraph();
            var graph_in_progress = "no"
            function initGraph() {
                drawGrid();
                    var y_equals_x_button = document.getElementById("y_equals_x");
                    y_equals_x_button.addEventListener('click', y_equals_xPressed, false);
                    var reset_grid_button = document.getElementById("reset_grid");
                    reset_grid_button.addEventListener('click', reset_grid_buttonPressed, false);
                    status_message = document.getElementById("status_message");
            }
    function drawGrid() {
        var i = 0;
        axis_pos = 2;
        can_width = theCanvas.width; 
        for (i=0;i<=can_width;i+=(can_width)/20)
            {
                if (i == (can_width)/2)
                    {
                        context.lineWidth = 2; 
                        context.strokeStyle = 'red'; 
                    }
                else
                    {
                        context.lineWidth = 1;
                        context.strokeStyle = 'black';
                    }
                context.beginPath();
                context.moveTo(i, 0);
                context.lineTo(i, can_width);
                context.stroke();
                context.closePath();
                
                context.beginPath();
                context.moveTo(0, i);
                context.lineTo(can_width, i);
                context.stroke();
                context.closePath();
            }
            
        context.font         = '12px _sans';
        context.textBaseline = 'bottom';
        context.translate(can_width / 2, can_width / 2);
        for (i=-10;i<=10;i++) {
            if (i != 0) 
            { 
                context.fillText  (i, i*(can_width/20) -9, 9);
    
                context.fillText  (i, -9, -i*(can_width/20)+9);
            }
        }
    context.font = 'italic bold 16px _sans';
    context.fillText ("x", (can_width/2)-12, 22);
    context.fillText ("y", 7, -(can_width/2.2));
  }
    function y_equals_xPressed(e) {
            draw_grid_line(1, "grey");
    }
    function draw_grid_line (slope, color) {
        if (graph_in_progress == "yes") {
    
        } 
        else {
            init_x = -(theCanvas.width)/2; 
            init_y = -(init_x) * slope 
            new_x = init_x;
            new_y = init_y;
            var drawLineIntervalId = 0;
            graph_in_progress = "yes" 
            drawLineIntervalId = setInterval(do_animation, 1);
        }
    
            function do_animation () {
                context.lineWidth = 3;
                context.strokeStyle = color;
                context.beginPath();
                context.moveTo(init_x, init_y);
                context.lineTo(new_x, new_y);
                context.stroke();
                context.closePath();
                new_x = new_x + 100
                new_y = -(new_x) * slope
                context.lineTo(new_x, new_y)
                    if (new_x == theCanvas.width + 100) {
                        clearInterval(drawLineIntervalId);
                        graph_in_progress = "no" 
                        status_message.innerHTML = "Click a button "
                    }
            }
  }
    
  function reset_grid_buttonPressed(e) {
    theCanvas.width = theCanvas.width;
    drawGrid();
  }
}
