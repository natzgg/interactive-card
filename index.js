var confirmBtn = document.querySelector(".confirm");
var cardDetails = document.querySelector(".card-details");
var btnContainer = document.querySelector(".btn-container");
var thankyouContainer = document.querySelector(".thankyou-container");
var cardNameInput = document.querySelector(".card-holder");
var cardName = document.querySelector(".name");
var cardNumber = document.querySelector(".middle");
var cardNumberInput = document.querySelector(".card-number");
var cardExpMonth = document.querySelector(".exp-month");
var cardExpYear = document.querySelector(".exp-year");
var expMonth = document.querySelector(".month-text");
var expYear = document.querySelector(".year-text");
var cardCvc = document.querySelector(".card-text-back");
var cvcInput = document.querySelector(".cvc-input");

confirmBtn.addEventListener("click", () => {
  cardDetails.classList.add("not-visible");
  btnContainer.classList.add("not-visible");
  thankyouContainer.classList.remove("not-visible");
});

cardNameInput.addEventListener("input", changeName);
cardNumberInput.addEventListener("input", changeNumber);
cardExpMonth.addEventListener("input", changeMonth);
cardExpYear.addEventListener("input", changeYear);
cvcInput.addEventListener("input", changeCVC);

function changeName(e) {
  let input = e.target.value;
  let name = input.slice(-1);

  if (name.match(/^[A-Za-z\s]*$/)) {
    cardNameInput.style.border = "1px solid black";

    if (input.length <= 24) {
      cardName.textContent = input;
    } else {
      e.target.value = input.slice(0, input.length - 1);
    }

    if (input.match(/^(?!.*\S)/)) {
      cardName.textContent = "JANE APPLESEED";
      cardNameInput.opacity = "0.6";
    }
  } else {
    cardNameInput.style.border = "1px solid hsl(0, 100%, 66%)";
    e.target.value = input.slice(0, input.length - 1);
  }
}

function changeNumber(e) {
  let input = e.target.value;
  let number = input.slice(-1);
  if (checkCardLength(input)) {
    if (number.match(/^\d+$/)) {
      cardNumberInput.style.border = "1px solid black";
      if (input.length <= 16) {
        let inputPadded = input.padEnd(16, "0");
        cardNumber.textContent = inputPadded.match(/.{1,4}/g).join(" ");
      }
    } else {
      cardNumberInput.style.border = "1px solid hsl(0, 100%, 66%)";
      e.target.value = input.slice(0, input.length - 1);
    }
  } else {
    cardNumberInput.style.border = "1px solid hsl(0, 100%, 66%)";
    e.target.value = input.slice(0, input.length - 1);

    if (input.length == 17) {
      cardNumberInput.style.border = "1px solid black";
    }
  }

  if (input.match(/^(?!.*\S)/)) {
    cardNumberInput.style.border = "1px solid black";
    cardNumber.textContent = "0000 0000 0000 0000";
  }
}

function checkCardLength(number) {
  return number.length <= 16 ? true : false;
}

function changeMonth(e) {
  let input = e.target.value;
  let month = input.slice(-1);

  if (month.match(/^\d+$/)) {
    if (input.length <= 2) {
      cardExpMonth.style.border = "1px solid black";
      if (input[0] == 1) {
        if (month > 2) {
          e.target.value = input.slice(0, input.length - 1);
          input = input[0];
        }
      } else if (input[0] == 0) {
        if (month > 9) {
          e.target.value = input.slice(0, input.length - 1);
          input = input[0];
        }
      } else {
        e.target.value = input.slice(0, input.length - 1);
        input = "00";
      }
      expMonth.textContent = input;
    } else {
      e.target.value = input.slice(0, input.length - 1);
    }
  } else {
    cardExpMonth.style.border = "1px solid hsl(0, 100%, 66%)";
    e.target.value = input.slice(0, input.length - 1);
  }

  if (input.match(/^(?!.*\S)/)) {
    cardExpMonth.style.border = "1px solid black";
    expMonth.textContent = "00";
  }
}

function changeYear(e) {
  let input = e.target.value;
  let year = input.slice(-1);

  if (year.match(/^\d+$/)) {
    if (input.length <= 2) {
      cardExpYear.style.border = "1px solid black";
      expYear.textContent = input;
    } else {
      e.target.value = input.slice(0, input.length - 1);
    }
  } else {
    cardExpYear.style.border = "1px solid hsl(0, 100%, 66%)";
    e.target.value = input.slice(0, input.length - 1);
  }

  if (input.match(/^(?!.*\S)/)) {
    cardExpYear.style.border = "1px solid black";
    expYear.textContent = "00";
  }
}

function changeCVC(e) {
  let input = e.target.value;
  let cvc = input.slice(-1);

  if (cvc.match(/^\d+$/)) {
    if (input.length <= 3) {
      cvcInput.style.border = "1px solid black";
      cardCvc.textContent = input;
    } else {
      e.target.value = input.slice(0, input.length - 1);
    }
  } else {
    cvcInput.style.border = "1px solid hsl(0, 100%, 66%)";
    e.target.value = input.slice(0, input.length - 1);
  }

  if (input.match(/^(?!.*\S)/)) {
    cvcInput.style.border = "1px solid black";
    cardCvc.textContent = "000";
  }
}
