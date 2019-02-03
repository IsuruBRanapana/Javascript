var Flowers = {
    name : "Rose",
    color : "Rose",
    price : 45,

    sell : function(){
        document.write("<h1>"+"Flower can sell"+"</h1>");
    }
}


//know type of variable
document.write("<h2>"+typeof(Flowers)+"</h2>");
document.write("<h2>"+typeof(Flowers.color)+"</h2>");
document.write("<h2>"+typeof(Flowers.price)+"</h2>");
document.write("<h2>"+typeof(Flowers.sell())+"</h2>");

//Add a new property
Flowers.nickname ="RORO";

document.write("<h2>"+Flowers.nickname+"</h2>");


//change number type to string type
Flowers.price="45";
document.write("<h2>"+typeof(Flowers.price)+"</h2>");

//delete a property

delete Flowers.price;
document.write("<h2>"+Flowers.price+"</h2>");


