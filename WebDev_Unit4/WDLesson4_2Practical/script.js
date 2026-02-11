// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element
  
  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

function Area(){
  let height = parseFloat(document.getElementById("height").value);
  let width = parseFloat(document.getElementById("width").value);
  let output = document.getElementById("output");
  let a = (width * height);
  output.innerHTML = `your area is ${a}`;
  if (width <= 0 || height <= 0 ){
  message = "Inappropriate measurement";
  output = message;
  }
}  
/* Challenge 2:  Create the function for Challenge 1 scenario */


/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  let a = document.getElementById("animal").value;
  let e = document.getElementById("emotion").value;
  let output = document.getElementById("output");
  output.innerHTML = "";
  let filename = "";
  if (a == "Bear"  && emotion == "Funny" ){
    filename = "funnyBear.jpg";
  }
  if (a == "Bear"  && emotion == "Sad" ){
    filename = "sadBear.jpg";
  }
  if (a == "Dog" && e == "Sad"){
    filename = "funnyDog.jpg";
  }
  if (a == "Dog"  && e == "Sad" ){
    filename = "sadDog.jpg";
  }
  if (a == "Cat"  && e == "Funny" ){
    filename = "funnyCat.jpg";
  }
  if (a == "Cat"  && e == "Sad" ){
    filename = "sadCat.jpg";
  output.innerHTML = `<img src = "${filename}">`;
  }
  

}