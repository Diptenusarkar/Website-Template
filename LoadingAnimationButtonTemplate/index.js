


//  Button One JavaScripts 


let buttonOne = document.getElementById("btn-1");
let buttonOneIcon = document.getElementById("btn-1-icon");
let buttonOneText = document.getElementById("btn-1-text");
let buttonOneSubmit = document.getElementById("btn-1-submit-icon");
buttonOneSubmit.style.display ="none";
buttonOne.onclick = function() {
    buttonOne.style.cursor ="wait";
    buttonOneText.textContent ="";
    buttonOneText.style.margin ="0px";
    buttonOneIcon.style.display="none";
    buttonOneSubmit.style.display="block";
    setTimeout(()=>{
        buttonOne.style.pointerEvents = "none";
        buttonOneText.textContent = "Done";
        buttonOneIcon.style.display="block";
        buttonOneSubmit.style.display="none";
    },4000);
}


//  Button Java Scritps


document.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("btn-2-c")) {
      evt.target.classList.add("btn-2-loading");
      setTimeout(() => {
        evt.target.classList.remove("btn-2-loading");
      }, 3000);
    }
  });


//  Button three 

    
  
document.addEventListener("click", (evt1) => {
    if (evt1.target.classList.contains("btn-3")) {
        evt1.target.classList.add("btn-3-loading");
        setTimeout(() => {
        evt1.target.classList.remove("btn-3-loading");
        }, 3000);
    }
    });
    

// Button Four 

const button = document.getElementsByClassName("loading-button")[0]; 
button.addEventListener("click", function(){
  button.classList.add("loading");
  // simulate getting something from the server
  setTimeout(function(){
      button.classList.remove("loading");
      button.classList.add("success");

    setTimeout(function(){
      button.classList.remove("success");
    }, 2000);
  }, 3000);
});
  
// Button 5     




const loading = document.getElementById("loading");
const button1 = document.getElementById("button");
let flag = true;

button1.addEventListener("click", (event) => {
	flag ? loading.classList.add("spinner") : loading.classList.remove("spinner");

	flag = !flag;
});
