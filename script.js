// Code goes here
function Calc($scope) {

  $scope.a = "";
  $scope.b = "";
  $scope.sign = "";
  $scope.input = "";
  $scope.addToScreen = function ($event) {
    const symbol = $event.currentTarget.value;
    if (symbol === "0" && $scope.input === "") {
      $scope.input = "0.";
    } else {
      $scope.input += symbol;
    }
  };

  $scope.dot = function () {
    if ($scope.input.includes(".")) {
      return;
    } else {
      $scope.input += ".";
    }
  };

  $scope.changeSymbol = function () {
    if ($scope.input === "") return;
    if ($scope.input.charAt(0) !== "-") {
      $scope.input = "-" + $scope.input;
    } else {
      $scope.input = $scope.input.substring(1);
    }
  };

  $scope.setSign = function ($event) {
    $scope.sign = $event.currentTarget.value;
    $scope.a = $scope.input;
    $scope.input = "";
  };

  $scope.calculate = function () {
    if ($scope.sign === "E") {
      const n = $scope.input.substring($scope.input.indexOf("E") + 1);
      const num = $scope.input.substring(
        $scope.input.indexOf("E"),
        0
      );
      $scope.input = num + "0".repeat(n);
      return;
    }
    $scope.b = parseFloat($scope.input);
    if($scope.b != 0 && $scope.sign != '/')
    $scope.input = String(eval($scope.a + $scope.sign + $scope.b));
    else
    alert('Nie przez zero!')
  };

  function factorial(n) {
    if (n < 0) return;
    if (n < 2) return 1;
    return n * factorial(n - 1);
  }

  $scope.fact = function () {
    if (
      $scope.input.includes(".") ||
      $scope.input.includes("-") ||
      $scope.input == ""
    ) {
      alert("Błędne dane");
      return;
    }
    $scope.input = factorial(parseInt($scope.input));
  };

  $scope.pow2 = function () {
    if ($scope.input == "") {
      alert("Błędne dane");
      return;
    }
    $scope.input = parseFloat($scope.input) ** 2;
  };

  $scope.trig = function ($event) {
    if ($scope.input == "") {
      alert("Błędne dane");
      return;
    }
    $scope.input = eval(
      `Math.${$event.currentTarget.value}(${$scope.input})`
    );
  };
  $scope.sqrt = function () {
    if (
      $scope.input.includes(".") ||
      $scope.input.includes("-") ||
      $scope.input == ""
    ) {
      alert("Błędne dane");
      return;
    }
    $scope.input = Math.sqrt(parseInt($scope.input));
  };

  $scope.tenTo = function () {
    if ($scope.input == "") {
      alert("Błędne dane");
      return;
    }
    $scope.input = 10 ** parseFloat($scope.input);
  };

  $scope.exp = function () {
    if ($scope.input == "" || $scope.input.includes("E")) {
      alert("Błędne dane");
      return;
    }
    $scope.sign = "E";
    $scope.input += "E";
  };

}
