 function compareNumeric(x, y)
 {
     return x - y;
}

module.exports = function solveEquation(equation) {
  // your implementation
 var mass = equation.split (' ');
 var arr = [];
var a = (mass[0]);
var b = (mass[3]+mass[4]);
var c = (mass[7]+mass[8]);

var D = (b*b-4*a*c);
  if (D>=0) {
  arr[0] = Math.round(((-b)-Math.sqrt(D))/(2*a));
   arr[1] = Math.round(((-b)+Math.sqrt(D))/(2*a));
	}
	
	else{
		return null;
	}

 arr.sort(compareNumeric);
     return arr;
  }
 

