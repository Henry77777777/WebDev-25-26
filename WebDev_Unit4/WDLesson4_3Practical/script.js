/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
function BMI(){
       let weight = parseFloat(document.getElementById("Weight").value);
       let height = parseFloat(document.getElementById("Height").value);
       let output = document.getElementById("output");
       let  formula = (weight / Math.pow(height, 2)) * 703;
       let filename = "";
       let status = "";

       if(formula < 18.5){
              filename = "underweight.png";
              status = "under weight"
       }
       else if(formula >= 18.5 && formula < 25){
              filename = "healthyweight.png";
              status = "healthy weight"
       }
       else if(formula >= 25 && formula < 30){
              filename = "overweight.png";
              status = "over weight"
       }
       else{
              filename = "obeseweight.png";
              status = "obese weight"
       }
       output.innerHTML = `<img src = "${filename}"><br>You are ${status}`;
 
}

/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/

