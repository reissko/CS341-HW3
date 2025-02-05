

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
    $(".dropbtn").html(month[0].toUpperCase() + month.slice(1));
    switch(month) {
        case "jan":
            $("#orders-list").html("<li id='cherry-orders'>11 cherry</li><li id='cherry-orders'>17 chocolate</li><li id='plain-orders'>31 plain</li>");
            break;
        case "feb":
            $("#orders-list").html("<li id='cherry-orders'>9 cherry</li><li id='cherry-orders'>19 chocolate</li><li id='plain-orders'>8 plain</li>");
            break;
        case "mar":
            $("#orders-list").html("<li id='cherry-orders'>10 cherry</li><li id='cherry-orders'>19 chocolate</li><li id='plain-orders'>3 plain</li>");
            break;
        case "apr":
            $("#orders-list").html("<li id='cherry-orders'>12 cherry</li><li id='cherry-orders'>14 chocolate</li><li id='plain-orders'>20 plain</li>");
            break;
        case "may":
            $("#orders-list").html("<li id='cherry-orders'>3 cherry</li><li id='cherry-orders'>20 chocolate</li><li id='plain-orders'>6 plain</li>");
            break;
        case "jun":
            $("#orders-list").html("<li id='cherry-orders'>5 cherry</li><li id='cherry-orders'>6 chocolate</li><li id='plain-orders'>12 plain</li>");
            break;
        case "jul":
            $("#orders-list").html("<li id='cherry-orders'>8 cherry</li><li id='cherry-orders'>9 chocolate</li><li id='plain-orders'>5 plain</li>");
            break;
        case "aug":
            $("#orders-list").html("<li id='cherry-orders'>11 cherry</li><li id='cherry-orders'>18 chocolate</li><li id='plain-orders'>1 plain</li>");
            break;
        case "sep":
            $("#orders-list").html("<li id='cherry-orders'>20 cherry</li><li id='cherry-orders'>3 chocolate</li><li id='plain-orders'>5 plain</li>");
            break;
        case "oct":
            $("#orders-list").html("<li id='cherry-orders'>5 cherry</li><li id='cherry-orders'>2 chocolate</li><li id='plain-orders'>14 plain</li>");
            break;
        case "nov":
            $("#orders-list").html("<li id='cherry-orders'>8 cherry</li><li id='cherry-orders'>22 chocolate</li><li id='plain-orders'>16 plain</li>");
            break;
        case "dec":
            $("#orders-list").html("<li id='cherry-orders'>10 cherry</li><li id='cherry-orders'>16 chocolate</li><li id='plain-orders'>15 plain</li>");
            break;
    }
}