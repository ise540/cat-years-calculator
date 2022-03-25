const ageInput = flatpickr(document.querySelector(".age-input"), {
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
  weekNumbers: true,
  maxDate: "today",
  locale: "ru",
});

const calculateButton = document.querySelector(".calculate");
const catYearsResult = document.querySelector(".cat-years-result");

calculateButton.addEventListener("click", (e) => {
  const years = Date.parse(document.querySelector(".flatpickr-input").value);
  const now = Date.parse(new Date());

  const catYearsObj = catCalculator.getCatAgeObject(
    Math.floor((now - years) / 31536000000)
  );
  catYearsResult.textContent = `${catYearsObj.years} лет ${catYearsObj.months} месяцев`;
});
