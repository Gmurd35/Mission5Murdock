// calculator.js

//This takes the users inputs and calculates the total cost 
$(document).ready(function () {
    //On button click it does the calculation, and prevents it from refreshing until the next button click
    $('#calculateBtn').click(function (event) {
        event.preventDefault(); // Prevent form submission

        var hours = parseFloat($('#hours').val());

        // Make sure input is a positive number
        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a valid positive number of hours.');
            return;
        }
        //Hourly rate
        var rate = parseFloat($('#rate').val().replace('$', '')); 
        //Total calculation
        var total = hours * rate;

        //Display the total in the box
        $('#total').val('$' + total.toFixed(2));
    });
});
