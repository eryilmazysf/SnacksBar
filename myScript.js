buttonsA = document.querySelectorAll("#a");
buttonsB = document.querySelectorAll("#b");
buttonsC = document.querySelectorAll("#c");
returnMoney = document.getElementById("returnMoney");
totalMoney = document.getElementById("total");
showMoney = document.getElementById("showMoney"); //shows the money put in the box
bought = document.getElementById("bought");
money = document.getElementById("money");
add = document.getElementById("add");

//money boxes
let total = [];

// access to each buttons
for (const buttonA of buttonsA) {
  buttonA.addEventListener("click", function () {
    let getTotal = calculateTotal();
    let priceA = Number(document.getElementById("priceA").innerText);
    let returnPrice = (getTotal - priceA).toFixed(2);
    //console.log(getTotal);
    if (getTotal >= priceA) {
      returnMoney.innerText = returnPrice;
      total = [Number(returnPrice)]; // first element of total array will be remaning money after buying a snack
      totalMoney.innerText = returnPrice; // Total Screen will be remaining money after buying a snack
      showMoney.innerText = 0;
      bought.innerText = `You bought : ${buttonA.innerText}`; //show the snack buy by client
    } else {
      //insufficient fund to buy a snack
      returnMoney.setAttribute("style", "color:red");
      returnMoney.innerText = "you do not enough money to buy this product";
    }
  });
}
for (const buttonB of buttonsB) {
  buttonB.addEventListener("click", function () {
    let getTotal = calculateTotal();
    let priceB = Number(document.getElementById("priceB").innerText);
    let returnPrice = (getTotal - priceB).toFixed(2);

    if (getTotal >= priceB) {
      returnMoney.innerText = returnPrice;
      total = [Number(returnPrice)];
      totalMoney.innerText = returnPrice;
      showMoney.innerText = 0;
      bought.innerText = `You bought : ${buttonB.innerText}`;
    } else {
      returnMoney.setAttribute("style", "color:red");
      returnMoney.innerText = "you do not enough money to buy this product";
    }
  });
}
for (const buttonC of buttonsC) {
  buttonC.addEventListener("click", function () {
    let getTotal = calculateTotal();
    let priceC = Number(document.getElementById("priceC").innerText);
    let returnPrice = (getTotal - priceC).toFixed(2);

    if (getTotal >= priceC) {
      returnMoney.innerText = returnPrice;
      total = [Number(returnPrice)];
      totalMoney.innerText = returnPrice;
      showMoney.innerText = 0;
      bought.innerText = `You bought : ${buttonC.innerText}`;
    } else {
      returnMoney.setAttribute("style", "color:red");
      returnMoney.innerText = "you do not enough money to buy this product";
    }
  });
}

add.addEventListener("click", function () {
  //console.log(money.value);
  // accept just 0.25 or 0.1 or 0.05 cent moneys
  if (
    money.value == String(0.25) ||
    money.value == String(0.1) ||
    money.value == String(0.05)
  ) {
    showMoney.setAttribute("style", "color:green");
    showMoney.innerText = `${money.value}`;
    total.push(Number(money.value)); // add each  money to the money box
    calculateTotal();
    returnMoney.innerText = "";
    bought.innerText = "";
  } else {
    //don't accept except of 0.25 or 0.1 or 0.05 moneys
    returnMoney.setAttribute("style", "color:red");
    returnMoney.innerText = "you can put $0.05 or $0.25 or $0.1";
  }
  money.value = "";
});

//calculate the sum of the coins in the box
function calculateTotal() {
  //console.log("total", total);
  let sum = total.reduce(function (a, b) {
    return a + b;
  }, 0);
  //console.log("sum", sum);
  totalMoney.innerText = sum;
  return sum;
}
//if the client cancel buying snack
document.getElementById("cancel").addEventListener("click", function () {
  returnMoney = Number(totalMoney.innerText);
  if (returnMoney > 0) {
    returnMoney.innerText = calculateTotal();
    total = [0];
    totalMoney.innerText = 0;
    showMoney.innerText = 0;
  }
});
