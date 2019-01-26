// Задание 1

let printWindowValues = function() {
  console.log(window);
};

// Задание 2

let expTen = function(value) {
  let buffer = 1;
  for (let i = 1; i <= 10; i++) {
    buffer = buffer * value;
  }
  console.log("exp = ", buffer);
};

// Задание 3

let getFuncRes = function (func, arg){
  return func(arg);
};

// Вызов функций
printWindowValues();
expTen(2);
getFuncRes(console.log, "Hello World");
