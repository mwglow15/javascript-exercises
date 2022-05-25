const add = function(a,b) {
	const sum = a + b;
  return sum;
};

const subtract = function(a,b) {
	const diff = a - b;
  return diff;
};

const sum = function(array) {
	
  if (array.length === 0) {
    return 0;
  }

  const sum = array.reduce((total, value) => {
    return total + value;
  });
  
  return sum;
};

const multiply = function(array) {

  if (array.length === 0) {
    return 0;
  }

  const prod = array.reduce((total, value) => {
    return total * value;
  });
  return prod;
};

const power = function(base, pow) {

  let result = 1;

  for (i=0; i<pow; i++) {
    result *= base; 
  }
  return result;
};

const factorial = function(num) {
  let fact = 1;
	if (num === 0) {
    return fact;
  };

  for (i=num; i>0; i--) {
    fact *= i;
  };
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
