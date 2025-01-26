import { evaluateExpression } from "./calculator.js";

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

// Initialize an empty expression
let currentExpression = "0";

// Update the display function
function updateDisplay() {
  display.textContent = currentExpression;
}

// Function to handle button clicks
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const action = button.dataset.action;
    const value = button.dataset.value;

    // Handle clear button
    if (action === "clear") {
      currentExpression = "0";
    }

    // Handle delete button
    else if (action === "delete") {
      if (currentExpression.length > 1) {
        currentExpression = currentExpression.slice(0, -1);
      } else {
        currentExpression = "0";
      }
    }

    // Handle equals button
    else if (action === "equals") {
      try {
        console.log(currentExpression);
        const ans = evaluateExpression(currentExpression);
        currentExpression = `= ${ans} `;
      } catch (error) {
        currentExpression = "Error";
      }
    }

    // Handle scientific function buttons (replace 0 with the function name)
    else if (action) {
      if (currentExpression === "0") {
        if (action === "sin") {
          currentExpression = "sin(";
        } else if (action === "cos") {
          currentExpression = "cos(";
        } else if (action === "tan") {
          currentExpression = "tan(";
        } else if (action === "sqrt") {
          currentExpression = "sqrt(";
        } else if (action === "log") {
          currentExpression = "log(";
        }
      } else {
        if (action === "sin") {
          currentExpression += "sin(";
        } else if (action === "cos") {
          currentExpression += "cos(";
        } else if (action === "tan") {
          currentExpression += "tan(";
        } else if (action === "sqrt") {
          currentExpression += "sqrt(";
        } else if (action === "log") {
          currentExpression += "log(";
        }
      }
    }

    // Handle π and e buttons (π = Math.PI, e = Math.E)
    else if (value === "π") {
      if (currentExpression === "0") {
        currentExpression = "Pi";
      } else {
        currentExpression += "Pi";
      }
    } else if (value === "e") {
      if (currentExpression === "0") {
        currentExpression = "e";
      } else {
        currentExpression += "e";
      }
    } else if (value == "(") {
      if (currentExpression === "0") {
        currentExpression = value;
      } else {
        currentExpression += `*(`;
      }
    } else if (value) {
      if (currentExpression === "0" && value !== ".") {
        currentExpression = value;
      } else {
        currentExpression += value;
      }
    }

    // Update the display after every button press
    updateDisplay();
  });
});
