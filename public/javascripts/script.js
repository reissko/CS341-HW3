

$(document).ready(function(){

    $("#order-button").click(handleOrderClick);
    $(".month-option").click(handleMonths);
});

function handleOrderClick() {
    let triggerWords = ['vegan'];
    // when the order button is clicked load the notes into a string variable
    let notes = $("textarea").val();
    console.log(notes);

    // go through each word that could trigger a warning to the customer
    // and see if the user needs to be warned of certain ingredients
    triggerWords.forEach(word => {
        if(notes.includes(word)) {
            // if a trigger word is in the notes then warn the customer!
            alert("Warning: Our cheesecakes contain dairy!")
        } else {
            // if no trigger word is found then hide elements and give
            // them a sincere thank you!
            $(".quantity-topping").hide();
            $("#notes-div").hide()
            $("#notes-thank-you").html("<h1>Thank you! Your order has been placed!</h1>");
            $("#notes-thank-you").css("font-family", "Bowlby One");

            // store the order details in variables
            // let quantity = $("#quantity").val();
            let quantity = $("#quantity").find(":selected").val();
            let topping = $("input[name='flavor']:checked").val();

            console.log(quantity);
            console.log(topping);
            
            // add the order summary after the thank you message
            $("#notes-thank-you").after("<p>Order Summary:</p><p>Quantity: " + quantity + "</p><p>Topping: " + topping + "</p><p>Notes: " + notes + "</p>");
                                
        }
    });
}
function handleMonths() {
    let month = $(this).val();
    console.log(month);
    $(".dropbtn").text(month[0].toUpperCase() + month.slice(1));
    console.log("herro")
    $.post('http://localhost:3000/orders', { month: month } , function (response) {
        $("#orders-list").empty(); // Clear existing orders

        if (response.length === 0) {
            $("#orders-list").append("<li>No orders found</li>");
        } else {
            response.forEach(order => {
                $("#orders-list").append(`<li>${order.quantity} ${order.topping}</li>`);
            });
        }
    }).fail(function () {
        $("#orders-list").empty().append("<li>Error loading orders</li>");
    });
}