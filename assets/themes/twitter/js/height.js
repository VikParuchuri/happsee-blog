var resize = function(){
    var wrap_height = $("#wrap").outerHeight();
    var content_height = $(".outer-content").outerHeight();
    console.log("Resizing.  Container height: " + content_height + " Wrap height: " + wrap_height);
    if(content_height > wrap_height){
        $("#wrap").height(content_height);
    } else {
        $(".outer-container").height(wrap_height);
    }
};

//Initial load of page
$(document).ready(resize);

//Every resize of window
$(window).resize(resize);