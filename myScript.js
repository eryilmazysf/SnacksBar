buttonsA = document.querySelectorAll("#a");
buttonsB = document.querySelectorAll("#b");
buttonsC = document.querySelectorAll("#c");

let total = [];

for (const buttonA of buttonsA) {
  buttonA.addEventListener("click", function () {
    let getTotal = calculateTotal();
    let priceA = Number(document.getElementById("priceA").innerText);
    let returnPrice = (getTotal - priceA).toFixed(2);
    //console.log(getTotal);
    if (getTotal >= priceA) {
      document.getElementById("returnPrice").innerText = returnPrice;
      total = [Number(returnPrice)];
      document.getElementById("total").innerText = returnPrice;
      document.getElementById("showMoney").innerText = 0;
      document.getElementById(
        "bought"
      ).innerText = `You bought : ${buttonA.innerText}`;
    } else {
      document.getElementById("returnPrice").setAttribute("style", "color:red");
      document.getElementById("returnPrice").innerText =
        "you do not enough money to buy this product";
    }
  });
}
for (const buttonB of buttonsB) {
  buttonB.addEventListener("click", function () {
    let getTotal = calculateTotal();
    let priceB = Number(document.getElementById("priceB").innerText);
    let returnPrice = (getTotal - priceB).toFixed(2);

    if (getTotal >= priceB) {
      document.getElementById("returnPrice").innerText = returnPrice;
      total = [Number(returnPrice)];
      document.getElementById("total").innerText = returnPrice;
      document.getElementById("showMoney").innerText = 0;
      document.getElementById(
        "bought"
      ).innerText = `You bought : ${buttonB.innerText}`;
    } else {
      document.getElementById("returnPrice").setAttribute("style", "color:red");
      document.getElementById("returnPrice").innerText =
        "you do not enough money to buy this product";
    }
  });
}
for (const buttonC of buttonsC) {
  buttonC.addEventListener("click", function () {
    let getTotal = calculateTotal();
    let priceC = Number(document.getElementById("priceC").innerText);
    let returnPrice = (getTotal - priceC).toFixed(2);

    if (getTotal >= priceC) {
      document.getElementById("returnPrice").innerText = returnPrice;
      total = [Number(returnPrice)];
      document.getElementById("total").innerText = returnPrice;
      document.getElementById("showMoney").innerText = 0;
      document.getElementById(
        "bought"
      ).innerText = `You bought : ${buttonC.innerText}`;
    } else {
      document.getElementById("returnPrice").setAttribute("style", "color:red");
      document.getElementById("returnPrice").innerText =
        "you do not enough money to buy this product";
    }
  });
}

money = document.getElementById("money");
add = document.getElementById("add");
add.addEventListener("click", function () {
  //console.log(money.value);
  if (
    money.value == String(0.25) ||
    money.value == String(0.1) ||
    money.value == String(0.05)
  ) {
    document.getElementById("showMoney").setAttribute("style", "color:green");
    document.getElementById("showMoney").innerText = `${money.value}`;
    total.push(Number(money.value));
    calculateTotal();
  } else {
    document.getElementById("showMoney").setAttribute("style", "color:red");
    document.getElementById("showMoney").innerText =
      "you can put $0.05 or $0.25 or $0.1";
  }
  money.value = "";
});
function calculateTotal() {
  //console.log("total", total);
  let sum = total.reduce(function (a, b) {
    return a + b;
  }, 0);
  //console.log("sum", sum);
  document.getElementById("total").innerText = sum;
  return sum;
}

document.getElementById("cancel").addEventListener("click", function () {
  window.location.reload();
});
