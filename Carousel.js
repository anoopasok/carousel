var showImage = function (x){
    $("[class^=image").hide();
    $("[class^=sliderButton").removeClass("button-on");
    $("[class^=sliderButton").addClass("button-off");
    $(".image" + x).show();
    $(".sliderButton" + x).addClass("button-on");
    $(".sliderButton" + x).removeClass("button-off");
};
var createCarousel = function(images){
    var counter=0;
    var imageHtml = "";
    var sliderHtml = "<div class=\"slider\">";
    while (counter < images.length){
        imageHtml = imageHtml + 
        "<div class=\"imageDiv image" + counter +"\">"+
            "<image class=\"img\" src=\""+ images[counter] +"\" />"+
        "</div>";
        sliderHtml = sliderHtml + 
        "<div class=\"sliderButton sliderButton" + counter +
        "\" id=\"sliderButton" + counter +
        "\" onclick=\"showImage(" + counter + ")\"></div>";
        counter++;
    }

    sliderHtml = sliderHtml + "</div>";
    $(".canvas").append(imageHtml);
    $(".canvas").append(sliderHtml);
    var offset = ($(".slider").width())/(images.length + 1);
    for (var i=0;i<images.length;i++){
            $(".sliderButton"+i).css("left", offset * (i+1) +  "px");
    }
    var iteration = 0;
    alert(images.length);
    setInterval(function(){ 
    	alert(iteration);
        showImage(iteration = iteration == images.length?0:iteration);
        iteration++; 
    }, 2000);
    
	
};
