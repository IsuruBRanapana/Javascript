var cars=["Audi", "BMW", "Honda", "Lambo"];         //One type of declaring arrays
document.write("<h3>"+cars+"</h3>");                //print the array
document.write("<h3>"+cars[2]+"</h3>");             //print one element
for(var i=0;i<4;i++){
    document.write("<h2>"+cars[i]+"</h2>");
}

document.write("<h1>"+cars.length+"</h1>");

cars.push("Toyota");                                //add element
for(var i=0;i<cars.length;i++){
    document.write("<h4>"+cars[i]+"</h4>");         //print whole
}


var arr1 = new Array("5","6","7");                  //another type of declaring array
document.write("<h5>"+arr1+"</h5>");

var arr2;
arr2= new Array("7","8","9");                       //another type of declaring arrays 
document.write("<h5>"+arr2+"</h5>");