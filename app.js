

function CalculationTask() {

    // Set the error default to null.
    error.innerHTML = null;

    // The first number of the input
    var number_1 = document.getElementById("number_1").value;

    // The second number of the input
    var number_2 = document.getElementById("number_2").value;

    // What the user thinks to result of the calculation is.
    var number_3 = document.getElementById("number_3").value;

    // Show a message if the users own calcutation is (in)correct.
    var owncalc = document.getElementById("owncalc");

    // Return the calcuation of the user.
    var calculation = document.getElementById("calculation" );

    // Get the type of calcutation the user wants to do.
    var calTyp = document.getElementById("calTyp").value;

    // Create the calculation.
    if(calTyp === "+") {
        var calcu = parseFloat(number_1) + parseFloat(number_2);
        var calculationTyp = "+";
    } else if(calTyp === "-") {
        var calcu = parseFloat(number_1) - parseFloat(number_2);
        var calculationTyp = "-";
    } else if (calTyp === "*") {
        var calcu = parseFloat(number_1) * parseFloat(number_2);
        var calculationTyp = "x";
    } else if (calTyp === "/") {
        var calcu = parseFloat(number_1) / parseFloat(number_2);
        var calculationTyp = ":";
    } else {
        error.innerHTML = "<div class=\"alert alert-danger text-center mt-3\" role=\"alert\">Je dient te kiezen hoe je de som wilt berekenen..</div>";
    }

    // Return a error if number 1 and 2 are 0.
    if(number_1 < 1 || number_2 < 1){
        error.innerHTML = "<div class=\"alert alert-danger text-center mt-3\" role=\"alert\">Je dient een hoger getal dan 0 op te geven..</div>";
    }

    // If the type of calculation is undefined.
    if(calTyp === "undefined") {

    } else {
        // Checking if the number 3 is equal to the result
        if (calcu == number_3) {
            owncalc.innerHTML = "<div class='text-success'>Je eigen berekening klopt!</div>";
        } else {
            owncalc.innerHTML = "<div class='text-danger'>Je eigen berekening klopt niet!</div>";
        }
        // The Calculation
        calculation.innerHTML = `${number_1} ${calculationTyp} ${number_2} = ${calcu}`;
    }
}