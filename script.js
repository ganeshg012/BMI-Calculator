const form = document.querySelector('form');

form.addEventListener('click', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == 0 || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a Valid ${height}`;
  } else if (weight == 0 || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a Valid ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      results.innerText = `under weight:${bmi}`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerText = `Normal Range:${bmi}`;
    } else if (bmi > 24.9) {
      results.innerText = `Over weight:${bmi}`;
    }
  }
});
