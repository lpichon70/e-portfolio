//Permet de savoir si nous avons descendu la page ou si nous montons
var dessus;
var dessous;


var enTrainDeDescendre = false;
var enTrainDeMonter = false ;

//Une fois que le document est chargé correctement, on peut utiliser le scroll
$(document).ready(function() {
    $('#nav').addClass("fixed").animate({height:"45px"} , "slow");
$(window).scroll(function (event) {
    // A chaque fois que l'utilisateur va scroller (descendre la page)
    var y = $(this).scrollTop(); // On récupérer la valeur du scroll vertical
    
    if (dessous == null && dessus == null)
    {
        dessous = y + 10;
        dessus = y - 10;
    }
    //Lorsque l'on descend dans la page
    else if ( y > dessous)
    {
        //$('#nav').height(0).animate({height : "45px"} , "slow");
        dessous = y + 10;
        dessus = y - 10;
        if (enTrainDeDescendre == false)
        {
            enTrainDeDescendre = true;
            enTrainDeMonter = false;
            $("#nav").animate({height :"0px"},"slow");
            $("li").hide();
            $("#nav").css("border", "none");
        }
        
    }
    //Lorsqyue l'on monte dans la âge
    else if (y < dessus)
    {
        dessous = y + 10;
        dessus = y - 10;
        if (enTrainDeMonter == false)
        {
            enTrainDeDescendre = false;
            enTrainDeMonter = true;
            $("#nav").animate({height :"45px", border:"none"},"slow");
            $("li").show();
            $("#nav").css("border", "solid 1px white");
        }
        
    }
});
});


  
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
});