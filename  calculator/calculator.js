export const evaluateExpression = (expr) => {
  // Validate the expression first
  const validationError = validateExpression(expr);
  if (validationError) {
    return validationError; // Return error if validation fails
  }

  // Replace Pi and e with their values before tokenizing
  expr = expr.replace(/Pi/g, Math.PI).replace(/e/g, Math.E);

  // Tokenize the expression
  let tokens = tokenize(expr);

  // Convert to Reverse Polish Notation (RPN)
  let rpn = toRPN(tokens);

  // Evaluate the RPN expression
  return evaluateRPN(rpn);
};

// Validate the expression for issues like unbalanced parentheses, invalid operator usage, implicit multiplication, and empty parentheses
function validateExpression(expr) {
  // Check for unbalanced parentheses
  let openParenCount = 0;
  for (let char of expr) {
    if (char === "(") openParenCount++;
    if (char === ")") openParenCount--;
    if (openParenCount < 0) return "Expression Error";
  }
  if (openParenCount !== 0) return "Expression Error";

  // Check for invalid operators like ++, **, --, etc.
  if (/[+\-*/^]{2,}/.test(expr)) {
    return " Expression Error";
  }

  // Check for operators at the beginning or end, or consecutive operators like 10+++3
  if (
    /^[+\-*/^]/.test(expr) ||
    /[+\-*/^]$/.test(expr) ||
    /[+\-*/^]{2,}/.test(expr)
  ) {
    return " Expression Error";
  }

  // Check for empty parentheses (e.g., 2())
  if (/\(\s*\)/.test(expr)) {
    return " Expression Error";
  }

  return null; // No errors
}

// Tokenizer: Breaks the input expression into an array of tokens (numbers, operators, functions)
function tokenize(expr) {
  // Regex to match numbers, operators, functions like sin, cos, tan, sqrt, log, and parentheses
  const regex = /\d+\.\d+|\d+|[+\-*/^()]|sin|cos|tan|log|sqrt/g;
  return expr.match(regex);
}

// Convert infix expression (standard mathematical expression) to RPN (Reverse Polish Notation)
function toRPN(tokens) {
  let output = [];
  let operators = [];
  let precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
    "(": 0,
    ")": 0,
  };

  for (let token of tokens) {
    if (isNumber(token)) {
      output.push(parseFloat(token));
    } else if (isFunction(token)) {
      operators.push(token);
    } else if (token === "(") {
      operators.push(token);
    } else if (token === ")") {
      while (operators.length && operators[operators.length - 1] !== "(") {
        output.push(operators.pop());
      }
      operators.pop(); // Pop the '('
    } else if (isOperator(token)) {
      while (
        operators.length &&
        precedence[operators[operators.length - 1]] >= precedence[token]
      ) {
        output.push(operators.pop());
      }
      operators.push(token);
    }
  }

  // Pop all remaining operators
  while (operators.length) {
    output.push(operators.pop());
  }

  return output;
}

// Evaluate the Reverse Polish Notation expression
function evaluateRPN(rpn) {
  let stack = [];

  for (let token of rpn) {
    if (isNumber(token)) {
      stack.push(token);
    } else if (isFunction(token)) {
      let arg = stack.pop();
      stack.push(evaluateFunction(token, arg));
    } else if (isOperator(token)) {
      let b = stack.pop();
      let a = stack.pop();
      stack.push(evaluateOperator(token, a, b));
    }
  }

  return stack.pop();
}

// Check if a token is a number
function isNumber(token) {
  return !isNaN(parseFloat(token));
}

// Check if a token is an operator (+, -, *, /, ^)
function isOperator(token) {
  return ["+", "-", "*", "/", "^"].includes(token);
}

// Check if a token is a function (sin, cos, tan, log, sqrt)
function isFunction(token) {
  return ["sin", "cos", "tan", "log", "sqrt"].includes(token);
}

// Evaluate functions like sin(x), cos(x), tan(x), log(x), sqrt(x)
function evaluateFunction(fn, arg) {
  switch (fn) {
    case "sin":
      return Math.sin(degreesToRadians(arg)); // Convert degrees to radians
    case "cos":
      return Math.cos(degreesToRadians(arg));
    case "tan":
      return Math.tan(degreesToRadians(arg));
    case "log":
      return Math.log(arg) / Math.log(10); // Base 10 logarithm
    case "sqrt":
      return Math.sqrt(arg);
    default:
      throw new Error(`Unknown function: ${fn}`);
  }
}

// Convert degrees to radians
function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

// Evaluate operators (+, -, *, /, ^)
function evaluateOperator(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "^":
      return Math.pow(a, b);
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}
