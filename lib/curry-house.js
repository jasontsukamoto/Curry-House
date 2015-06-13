var curry = require('./curry');

function calculate (arg1) {
  return function(operator) {
    //if operator is add
    if (operator === '+' || operator === 'add') {
      return function(arg2) {
        return arg1 + arg2;
      };
    }

    //if operator is subtract
    if (operator === '-' || operator === 'subtract') {
      return function(arg2) {
        return arg1 - arg2;
      };
    }

    //if operator is multiply
    if (operator === '*' || operator === 'multiply') {
      return function(arg2) {
        return arg1 * arg2;
      };
    }

    //if operator is divide
    if (operator === '/' || operator === 'divide') {
      return function(arg2) {
        return arg1 / arg2;
      };
    }

    //if operator is modulo
    if (operator === '%' || operator === 'modulo') {
      return function(arg2) {
        return arg1 % arg2;
      };
    }

    if (operator === '^' || operator === 'power of') {
      return function(arg2) {
        var sum = 1;
        while (arg2 > 0) {
          sum *= arg1;
          arg2--;
        }
        return sum;
      };
    }
  };
}

function random (start) {
  return {
    to : function(end) {
      return Math.floor(Math.random() * ((end - 1) - start)) + start;
    },
    toInclude : function(end) {
      return Math.floor(Math.random() * (end - start)) + start;
    }
  };
}

function concat(op1, op2) {
  return op1 + op2 + '';
}

var prependGreeting = curry(concat, 'Hello ');
prependGreeting('Jason');

function add (op1, op2, op3) {
  return op1 + op2 + op3;
}

var add4and5 = curry(add, 4, 5);
add4and5(6);

function calculator(operation) {
  return function(op2, op1) {
    if (operation === '+' || operation === 'add') {
      return op1 + op2;
    } else if (operation === '-' || operation === 'subtract') {
      return op1 - op2;
    } else if (operation === '*' || operation === 'multiply') {
      return op1 * op2;
    } else if (operation === '/' || operation === 'divide') {
      return op1 / op2;
    } else if (operation === '%' || operation === 'modulo') {
      return op1 % op2;
    } else if (operation === '^' || operation === 'power of') {
      var sum = 1;
      while (op2 > 0) {
        sum *= op1;
        op2--;
      }
      return sum;
    }
  };
}

var add5 = curry(calculator('+'), 5);
var sub5 = curry(calculator('-'), 5);
var multiply5 = curry(calculator('*'), 5);
var divide5 = curry(calculator('/'), 5);
var mod5 = curry(calculator('%'), 5);
var pow3 = curry(calculator('^'), 3);

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};