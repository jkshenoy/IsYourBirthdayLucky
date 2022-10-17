const dateBirth = document.querySelector('#dob');
const luckyNumber = document.querySelector('#lucky-num');
const checkBtn = document.querySelector('#check-btn');
const message = document.querySelector('#msg');

function hideMessage() {
  message.style.display = 'none';
}

function showMessage(msg) {
  message.style.display = 'block';
  message.innerText = msg;
}

function calcSum(numDate) {
  numDate = numDate.replaceAll('-', '');
  console.log(`date inside calcSum(): ${numDate}`);
  let sum = 0;
  for (let i = 0; i < numDate.length; i++) {
    sum += Number(numDate.charAt(i));
  }
  console.log(`sum inside calcSum(): ${sum}`);
  return sum;
}

function validateLucky() {
  const date = dateBirth.value;
  console.log(date);
  const dateBirthSum = calcSum(date);
  if (date && luckyNumber.value) {
    if (luckyNumber.value <= 0)
      message.innerText =
        'Enter a positive integer for lucky number 😒 Remember, One should remain positive to attract good luck 😉 ';
    else {
      if (dateBirthSum % luckyNumber.value === 0)
        message.innerText = 'Yaay! Your Birthdate is Lucky 🥳';
      else
        message.innerText = 'Aaaw! Seems like the Lady Luck is against you 😢';
    }
  } else
    message.innerText =
      'Invalid input. Please enter values for DOB/lucky number!';
}

checkBtn.addEventListener('click', validateLucky);
