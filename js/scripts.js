// Front End Logic
$(document).ready(function(){
  $("#pingPong").submit(function(event){
    var userInput = parseInt($("#userInput").val());
    var arrayNum = pingPong(userInput);
    $("#result").text(arrayNum);
    event.preventDefault();


  });
});

// Business Logic

function pingPong(userInput) {
  var arrayPingPong = [];
  for (var i = 1; i < userInput + 1; i++) {
    if (i % 15 === 0) {
      arrayPingPong.push("pingpong");

    } else if (i % 5 === 0) {
      arrayPingPong.push("pong");

    }else if (i % 3 === 0) {
      arrayPingPong.push("ping");
    } else {
      arrayPingPong.push(i);
    }

  }
  return arrayPingPong;

};
