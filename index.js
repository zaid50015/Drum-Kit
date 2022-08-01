//*********************************************************************************** */
// Using  add event lister   onclick bhi use kar sakte ho



/*document.querySelectorAll("button")[0].addEventListener("click",givealert);



function givealert(){
    alert("Hello");
}*/
//************************************************************************************ */
// using annoynimus function


let len= document.querySelectorAll(".drum").length;
for (let index = 0; index < len; index++) {
  
 document.querySelectorAll(".drum")[index].addEventListener("click",function(){
    let key = this.innerHTML;
       beats(key);
       buttonChange(key);
    });
}
document.addEventListener("keydown",(event)=>{
 beats(event.key);
 buttonChange(event.key);
})
function beats(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
            break;
             case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                 tom2.play();
                break;
                case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                     tom3.play();
                    break;
                    case "d":
                        var tom4 = new Audio("sounds/tom-4.mp3");
                         tom4.play();
                        break;
                        case "j":
                        var snare = new Audio("sounds/snare.mp3");
                         snare.play();
                        break;
                        case "k":
                            var crash = new Audio("sounds/crash.mp3");
                             crash.play();
                             break;
                             case "l":
                            var kickbass = new Audio("sounds/kick-bass.mp3");
                             kickbass.play();
                             break;
        
      }
}

 function buttonChange(keyselected){
    let buttonChange=document.querySelector("."+keyselected);
    buttonChange.classList.add("pressed");
    setTimeout(() => {
        buttonChange.classList.remove("pressed");
    }, 100);

 }
















