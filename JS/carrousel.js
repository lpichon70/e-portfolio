function main() {
    let boutons = document.querySelectorAll(".slider-control");
    let btnNext = document.querySelector(".next-image");
    let btnPrevious = document.querySelector(".previous-image");

    //let cb = document.getElementById("auto");
    /*for (let i = 0; i < boutons.length; i++) {
        //bouton[i].onclick = clickBtn;
        boutons[i].addEventListener("click", clickBtn);
    }*/
    
    btnNext.addEventListener("click",nextImage);
    btnPrevious.addEventListener("click",previousImage);

    setInterval(nextImage, 3000);

    changeContent(0);
}


/**
* Activate one image of the slider
* @param {number} number the index of the image (0=first)
*/
function print(number) {
    active(number, ".slider-panel");
    active(number, ".slider-control");
    changeContent(number);
}

/**
 * 
 * @param {number} number
 * @param {string} selector
 */
function active(number, selector) {
    let objects = document.querySelectorAll(selector);
    for (let i = 0; i < objects.length; i++) {
        objects[i].classList.remove("active");
    }
    objects[number].classList.add("active");
}

/**
 * 
 * @param {PointerEvent} evt
 */
function clickBtn(evt) {
    let bouton = evt.target;
    let boutons = document.querySelectorAll(".slider-control");
    num = [].indexOf.call(boutons, bouton);
    print(num); 
}

var num = 0;
function nextImage() {
    num = (num + 1) % 4;
    print(num);
}

function previousImage(){
    if (num%4 ==0)
    {
        num = 3;
    }
    else
    {
        num = (num - 1) % 4;
    }
    print(num);
}

function changeContent(i){
    switch(i){
        case 0:
            $(".info-carousel").html("Création d'un site internet pour la DDCS").css('margin-left', '77vh');
            $(".underline").animate({left :"0vh", width : "50vh"}, 500);
        break;
        case 1:
            $(".info-carousel").html("Création d'un petit jeux pour apprendre à coder de manière propre").css('margin-left', '66vh');
            $(".underline").animate({left :"-10vh", width : "70vh"}, 500);
        break;
        case 2:
            $(".info-carousel").html("Petit jeux en C# se basant sur le jeux Jump King").css('margin-left', '74vh');
            $(".underline").animate({left :"0vh", width : "50vh"}, 500);
        break;
        case 3:
            $(".info-carousel").html("Création d'un ePportfolio").css('margin-left', '85vh');
            $(".underline").animate({left :"10vh", width : "30vh"}, 500);
        break;
    }
}


window.onload = main;
