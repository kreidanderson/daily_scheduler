// var time = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]
// var userInput;




    $('.saveBtn').on('click',function(){

    });


// var input = $("input")
// input.$('keyup', (e) =>{
//     localStorage.attr(input);
// })

var today = $("#currentDay");
var ts = Date.now()
var m = moment(ts)
m.format('dddd, MMMM Do YYYY')
var todayDate = m.format('dddd, MMMM Do YYYY');
today.text(todayDate)
currentHour = m.format('HH')
// console.log(currentHour)

// $(".saveBtn").on("click", function(){
//     var value = $(this).siblings(".description").val();
//      var time = $(this).parent.attr("id")
//      localStorage.setItem(time, value);
//  })
// // textContent;
//  $(".saveBtn").on("click", function(event){
//     event.preventDefault();
//     var value = $("textarea").val();
//      var time = $(this).attr("id")
//      window.localStorage.attr("value", time);
//      console.log(window.localStorage.setItem(value))
//  })




// for(i=0; i<time.length; i++) {
//   userInput.attr("id", "time[i]")
//   // Here i have created a loop so that an id is created for each input whereby they each get a number for an id.
// }

// console.log(userInput.attr("id"))
var timeId = $("input")

// If you look below, we are taking the current time and if it is equal to the time in the scheduler, it will go red (for present time)
if (currentHour == "08"){
  $("#8").attr("class", "col col-md-8 col-2 past present")
}
else if (currentHour == "09"){
  $("#9").attr("class", "col col-md-8 col-2 past present")
}
else if (currentHour == "10"){
  $("#10").attr("class", "col col-md-8 col-2 past present")
}
else if (currentHour == "11"){
  $("#11").attr("class", "col col-md-8 col-2 past present")
}
else if (currentHour == "12"){
  $("#12").attr("class", "col col-md-8 col-2 past present")
}
else if (currentHour == "13"){
  $("#13").attr("class", "col col-md-8 col-2 past present")
}
else if (currentHour == "14"){
  $("#14").attr("class", "col col-md-8 col-2 past present")
}
else if (currentHour == "15"){
  $("#15").attr("class", "col col-md-8 col-2 past present")
}
else if (currentHour == "16"){
  $("#16").attr("class", "col col-md-8 col-2 past present")
}
else if (currentHour == "17"){
  $("#17").attr("class", "col col-md-8 col-2 past present")
}

//In this part the scheduler will turn green if something is in the future.
if (currentHour < "08"){
    $("#8").attr("class", "col col-md-8 col-2 past future")
  }
  else if (currentHour < "09"){
    $("#9").attr("class", "col col-md-8 col-2 past future")
  }
  else if (currentHour < "10"){
    $("#10").attr("class", "col col-md-8 col-2 past future")
  }
  else if (currentHour < "11"){
    $("#11").attr("class", "col col-md-8 col-2 past future")
  }
  else if (currentHour < "12"){
    $("#12").attr("class", "col col-md-8 col-2 past future")
  }
  else if (currentHour < "13"){
    $("#13").attr("class", "col col-md-8 col-2 past future")
  }
  else if (currentHour < "14"){
    $("#14").attr("class", "col col-md-8 col-2 past future")
  }
  else if (currentHour < "15"){
    $("#15").attr("class", "col col-md-8 col-2 past future")
  }
  else if (currentHour < "16"){
    $("#16").attr("class", "col col-md-8 col-2 past future")
  }
  else if (currentHour < "17"){
    $("#17").attr("class", "col col-md-8 col-2 past future")
  }


  // var times = $("#8","#9","#10","#11","#12","#13","#14","#15","#16","#17");
 
 //it needs to change the specific hour ONLY to red and for some reason when you do this it deletes existing class tags.

// if(currentHour < timeId){
//   userInput.Attr("class", "future");
// }



// $(".saveBtn").on("click", function(){
//    var value = $(".description").val();
//     var time = currentHour.attr("id")
//     localStorage.setItem(time, value);
// })



