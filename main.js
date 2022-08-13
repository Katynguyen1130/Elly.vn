// variable declare for top bar slider
var show; 

var sliders = document.querySelectorAll("div.slide-button");
var bandphotos = document.querySelectorAll("div.top-band img")
var dots = document.querySelectorAll("div.thumbnail span")


// change photos in the top-band slider
sliders.forEach(
    function(slide) {
        slide.addEventListener("click", 
        function()
        { 
            
            bandphotos.forEach(
                function(bandphoto) {
                    
                    if (bandphoto.getAttribute("class")==="shown"){
                        bandphoto.setAttribute("class","unshown");
                    } else {bandphoto.setAttribute("class","shown");
                            }
                                }
            )

                dots.forEach(
                    function(dot) {
                       
                        if (dot.getAttribute("class")==="material-symbols-outlined checked" ){
                            dot.setAttribute("class","material-symbols-outlined unchecked");
                        } else dot.setAttribute("class","material-symbols-outlined checked");
                        
                    }
                )
            
            

        }
        )
    }
)

// 
