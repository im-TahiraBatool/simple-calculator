(function () {
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");
  
    buttons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        let value = e.target.dataset.num;
        screen.value += value;
      });
    });
  
    equal.addEventListener("click", function (e) {
      if (screen.value === "") {
        screen.value = "";
      } else {
        let answer = calculate(screen.value);
        screen.value = answer;
      }
    });
  
    clear.addEventListener("click", function (e) {
      screen.value = "";
    });
  
    function calculate(expression) {
      const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, ""); // Sanitize the input
      return new Function("return " + sanitizedExpression)(); // Use Function constructor to evaluate safely
    }
  })();