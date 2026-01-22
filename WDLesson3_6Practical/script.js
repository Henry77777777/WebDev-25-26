// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function average(){
    let g1 = parseFloat(document.getElementById("grade1").value);
    let g2 = parseFloat(document.getElementById("grade2").value);
    let g3 = parseFloat(document.getElementById("grade3").value);
    let op = document.getElementById("output");
    let a = (g1 + g2 + g3) / 3
    op.innerHTML = "Your average is " + a;
}
 

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function slope(){
    let x1 = parseFloat(document.getElementById("y1").value);
    let x2 = parseFloat(document.getElementById("y2").value);
    let y1 = parseFloat(document.getElementById("x1").value);
    let y2 = parseFloat(document.getElementById("x2").value);
    let op = document.getElementById("output2");
    let s = (x1 + x2) / (y1 - y2)
    op.innerHTML = "Your slope is is " + s;
}

// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function BMI(){
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let op = document.getElementById("output3");
    let BMI = (weight * 703) / (height)**2
    op.innerHTML = "Your body mass index is " + BMI;
}
