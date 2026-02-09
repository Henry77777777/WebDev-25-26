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
  let height = parseFloat(document.getElementById("height").value)
  let width = parseFloat(document.getElementById("height").value)
  let output = document.getElementById("output")
  let a = (width * height)
  output.innerHTML = `your area is ${a}`
  if (width <= 0 || height <= 0 ){
  message = "Inappropriate measurement"
  output.innerHTML = `Your inputs are ${message}`
}

}  
/* Challenge 2:  Create the function for Challenge 1 scenario */


/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function Pet(){
  let animal = document.getElementById("animal").value
  let emotion = document.getElementById("emotion").value
  output = document.getElementById("output")
  if (animal == Bear  && emotion == Funny ){
    message = <input src = "funnyBear.jpg"></input>
    output = `${message}`
  }
  if (animal == Bear  && emotion == Sad ){
    message = <input src = "sadBear.jpg"></input>
    output = `${message}`
  }
  if (animal == Dog && emotion == Funny ){
    message = <input src = "funnyDog.jpg"></input>
    output = `${message}`
  }
  if (animal == Dog  && emotion == Sad ){
    message = <input src = "sadDog.jpg"></input>
    output = `${message}`
  }
  if (animal == Cat  && emotion == Funny ){
    message = <input src = "funnyCat.jpg"></input>
    output = `${message}`
  }
  if (animal == Cat  && emotion == Sad ){
    message = <input src = "sadCat.jpg"></input>
    output = `${message}`
  }


}