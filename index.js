for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var music = this.innerHTML;
        sound(music);
        ani(key);
    })
}

document.addEventListener("keypress",function (b) {
    sound(b.key);
    ani(b.key);
});

function sound(a) {
    switch (a) {
        case "w":
            var as1 = new Audio("sounds/tom-1.mp3");
            as1.play();

            break;

        case "a":
            var as2 = new Audio("sounds/tom-2.mp3");
            as2.play();
            break;

        case "s":
            var as3 = new Audio("sounds/tom-3.mp3");
            as3.play();
            break;

        case "d":
            var as4 = new Audio("sounds/tom-4.mp3");
            as4.play();
            break;

        case "j":
            var as5 = new Audio("sounds/crash.mp3");
            as5.play();
            break;
        case "k":
            var as5 = new Audio("sounds/kick-bass.mp3");
            as5.play();
            break; 
            
        case "l":
            var as5 = new Audio("sounds/snare.mp3");
            as5.play();
            break;



        default:
            break;
    }
}

function ani(key) {
var act =  document.querySelector("." + key);
act.classList.add("pressed");
setTimeout(function () {
    act.classList.remove("pressed");    
},100);
}