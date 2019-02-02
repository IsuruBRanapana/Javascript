var cars={
    Cars_brand : "Audi",
    Cars_model : 3,
    Cars_country : "Japan",

    car_Revers : function(){
        document.write("<h1>"+"This car can revers"+"</h1>");
    },

    car_Drive : function(){
        return ("This car can drive");
    } 
}

document.write("<h2>"+cars.Cars_brand+"</h2>");
document.write("<h2>"+cars.car_Drive()+"</h2>");

// upper one is create one object.

//under one is constructor function. it means template

function car(Car_brand, Car_model, Car_contry){
    this.Car_brand=Car_brand;
    this.Car_model=Car_model;
    this.Car_contry=Car_model;
    this.car_Revers=function(){
        document.write("<h1>"+"This car can revers"+"</h1>");
    }
    this.car_Drive=function(){
        return ("This car can drive");
    }
}

var c1=new car(Audi,3,China)
document.write("<h3>"+c1.car_Drive()+"</h3>");
c1.car_Revers();


var c2=new car(Toyota,1,Japan)
c2.car_Revers();


