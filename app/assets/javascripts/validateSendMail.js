function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validateSendMail() {
  $("#mail_result").text("");
  var name = $("#yname").val();
  var email = $("#yemail").val();
  var message = $("#ymessage").val();
  if (name.length == 0) {
    $("#mail_result").text("Enter your name!");
    return false;
  } else if (email.length == 0) {
    $("#mail_result").text("Enter your e-mail!");
    return false;
  } else if (validateEmail(email) == false) {
    $("#mail_result").text(email + " is not valid email :(");
    return false;
  } else if (message.length == 0) {
    $("#mail_result").text("Enter your message!");
    return false;
  }
  return true;
}