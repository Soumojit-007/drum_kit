
//detecting the button press
var numofdrumbuttons = document.querySelectorAll(".drum").length
for (var a = 0; a <numofdrumbuttons ; a++) {
  document.querySelectorAll(".drum")[a].addEventListener("click", function () {

      var buttoninnerHTML = this.innerHTML;

      makeSound(buttoninnerHTML);
      buttonAnimation(buttoninnerHTML)
    });
}
  

  //detecting the keypress ,we can play the sound by using the elements on the keyboard:   
  document.addEventListener("keypress", function(event) {

    makeSound(event.key);
  
    buttonAnimation(event.key);
  
  });

function makeSound(key) {
  switch (key) {
    case "w":
      var a = new Audio("sounds/tom-1.mp3");
      a.play();
      break;

    case "a":
      var b = new Audio("sounds/snare.mp3");
      b.play();
      break;

    case "s":
      var c = new Audio("sounds/crash.mp3");
      c.play();
      break;

    case "d":
      var d = new Audio("sounds/kick-bass.mp3");
      d.play();
      break;

    case "j":
      var e = new Audio("sounds/tom-2.mp3");
      e.play();
      break;

    case "k":
      var f = new Audio("sounds/tom-3.mp3");
      f.play();
      break;

    case "l":
      var j = new Audio("sounds/tom-4.mp3");
      j.play();
      break;

    default:
      console.log(innerHTML);
  }
}


function buttonAnimation(currentkey){
    var activebutton = document.querySelector("."+currentkey) //we need to get "."+key for eg: ".w",".s"
    activebutton.classList.add("pressed") //for giving a border line: 
    setTimeout(function(){
        activebutton.classList.remove("pressed") // to undo the pressed condition of the buttons:
    },100)
}



