var button=document.getElementById("btn");  //identifying the element which has an id of "btn"

var lighton=document.getElementById("light");

var switch_light=new Audio("switch_audio.wav");

//when button is pressed, it will toggle(on or off on each press) and add the class "active_button"
function toggleBtn(){
  button.classList.toggle("active_button");
  lighton.classList.toggle("light_on");
  switch_light.play();
}
