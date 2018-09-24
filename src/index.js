 function compare_numeric(x, y)
 {
     return x - y;
}

module.exports = function solveEquation(equation) {
// разбиваем на массив
 var mass = equation.split (' ');
 var arr = [];
// в соответстви с элементами массива привсаиваем коэфициентам a и b и c значения
var a = (mass[0]);
var b = (mass[3]+mass[4]);
var c = (mass[7]+mass[8]);
// вычесляем дескременант
var D = (b*b-4*a*c);
  if (D>=0) {
// 	  если он больше нуля вычисляем корни
  arr[0] = Math.round(((-b)-Math.sqrt(D))/(2*a));
   arr[1] = Math.round(((-b)+Math.sqrt(D))/(2*a));
	}
// 	если меньше нуля корни комплексны и нам не интересно
	else{
		return null;
	}
// сортируем массив как нам надо благодаря параметра sort - compare_numeric
 arr.sort(compare_numeric);
     return arr;
  }
 

