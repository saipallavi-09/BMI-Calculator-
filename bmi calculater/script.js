document.addEventListener("DOMContentLoaded", function () {
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    weightInput.addEventListener("input", function () {
        updateWeight(this.value);
    });
    heightInput.addEventListener("input", function () {
        updateHeight(this.value);
    });
});
function updateWeight(value) {
    document.getElementById("weight-value").innerText =
        value + " kg";
}
function updateHeight(value) {
    document.getElementById("height-value").innerText =
        value + " cm";
}
function calculator() {
    const weight =
        parseFloat(document.getElementById("weight").value);
    const height =
        parseFloat(document.getElementById("height").value);
    const heightMeter = height / 100;
    const bmi = weight / (heightMeter * heightMeter);
    let category = "";
    if (bmi < 18.5)
        category = "Underweight";
    else if (bmi < 25)
        category = "Normal Weight";
    else if (bmi < 30)
        category = "Overweight";
    else
        category = "Obese";
    document.getElementById("display-weight").innerText =
        weight + " kg";
    document.getElementById("display-height").innerText =
        height + " cm";
    document.getElementById("bmi-result").innerText =
        bmi.toFixed(2);
    document.getElementById("bmi-category").innerText =
        category;
}