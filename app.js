var age = 15;
var pi = 3.1416;
var date = new Date();
var computeArea = function(l,w){
        return l*w;
};
var name = "Eduardo T. Flores Jr.";
console.log('EDAD: ' + age);
console.log('Pi: ' + pi.toFixed(2));
console.log(date);
console.log(name);
console.log(computeArea(10,60));


var x = 1;
var y = null;
var Waladiha=undefined;

if (x)
console.log('x is true');

if (!y)
console.log('y is false');

if (!Waladiha)
console.log('Waladiha is Undefined');

// ============JSON is a javascript object notation;

var jsonObject = {
    name: 'jason',
    lastname: 'Lopecal',
    address: 'Catigbian',
    
};

console.log(jsonObject.name);
console.log(jsonObject.lastname);
console.log(jsonObject.address);
console.log(jsonObject);