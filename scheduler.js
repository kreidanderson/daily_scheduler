$("#empty-div").html("<h1>Hello friends!</h1>");

// jQuery alternative to: var newDiv = document.createElement("div");
var newDiv = $("<div>");

// jQuery alternative to: newDiv.textContent = "A pleasure to meet you!";
newDiv.text("A pleasure to meet you!");

// jQuery alternative to: document.querySelector("#empty-div").appendChild(newDiv);
$("#empty-div").append(newDiv);

// If we need to apply some CSS, we can quickly do so, using the jQuery ".attr" method.
newDiv.attr("class", "fancy");
//above is all for reference -- comment or delete when testing the javascript.
_________________________________________________________________

// How can I get the third child of every row to be the save button.
// figure that out.
$(".row")

//then get the second child of every row to be the event input


var saveBtn = $(".saveBtn");

//if hour has passed, you should remove the present and future classes
//if the hour is present, you should remove the future and past classes
//if the hour is in the future you should remove the past and present classes

//how do we get a function that will realize what time it is?